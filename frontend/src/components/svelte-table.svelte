<script>
    import { createEventDispatcher } from "svelte";
    export let columns;
    export let rows;
    export let c_rows;
    export let sortOrders = [1, -1];
    export let sortBy = "";
    export let sortOrder = sortOrders?.[0] || 1;
    export let filterSelections = {};
    export let expanded = [];
    export let expandRowKey = null;
    export let expandSingle = false;
    export let iconAsc = "▲";
    export let iconDesc = "▼";
    export let iconSortable = "";
    export let iconExpand = "▼";
    export let iconExpanded = "▲";
    export let showExpandIcon = false;
    export let classNameTable = "";
    export let classNameThead = "";
    export let classNameTbody = "";
    export let classNameSelect = "";
    export let classNameRow = "";
    export let classNameCell = "";
    export let classNameRowExpanded = "";
    export let classNameExpandedContent = "";
    export let classNameCellExpand = "";

    const dispatch = createEventDispatcher();
    let sortFunction = () => "";

    if (!Array.isArray(expanded)) throw "'expanded' needs to be an array";
    let showFilterHeader = columns.some(c => {
      // check if there are any filter or search headers
      return c.filterOptions !== undefined || c.searchValue !== undefined;
    });

    let filterValues = {};
    let columnByKey;
    $: {
      columnByKey = {};
      columns.forEach(col => {
        columnByKey[col.key] = col;
      });
    }

    $: colspan = (showExpandIcon ? 1 : 0) + columns.length;
    $: c_rows = rows
      .filter(r => {

        // get search and filter results/matches
        return Object.keys(filterSelections).every(f => {
          // check search (text input) matches
          let resSearch =
            filterSelections[f] === "" ||
            (columnByKey[f].searchValue &&
              (columnByKey[f].searchValue(r) + "")
                .toLocaleLowerCase()
                .indexOf((filterSelections[f] + "").toLocaleLowerCase()) >= 0);

          // check filter (dropdown) matches
          let resFilter =
            resSearch ||
            filterSelections[f] === undefined ||
            // default to value() if filterValue() not provided in col
            filterSelections[f] ===
              (typeof columnByKey[f].filterValue === "function"
                ? columnByKey[f].filterValue(r)
                : columnByKey[f].value(r));
          return resFilter;
        });

      })
      .map(r =>
        Object.assign({}, r, {
          // internal row property for sort order
          $sortOn: sortFunction(r),
          // internal row property for expanded rows
          $expanded:
            expandRowKey !== null && expanded.indexOf(r[expandRowKey]) >= 0,
        })
      )
      .sort((a, b) => {
        if (!sortBy) return 0;
        else if (a.$sortOn > b.$sortOn) return sortOrder;
        else if (a.$sortOn < b.$sortOn) return -sortOrder;
        return 0;
      });


    const asStringArray = v =>
      []
        .concat(v)
        .filter(v => typeof v === "string" && v !== "")
        .join(" ");


    const calculateFilterValues = () => {
      filterValues = {};
      columns.forEach(c => {
        if (typeof c.filterOptions === "function") {
          filterValues[c.key] = c.filterOptions(rows);
        } else if (Array.isArray(c.filterOptions)) {
          // if array of strings is provided, use it for name and value
          filterValues[c.key] = c.filterOptions.map(val => ({
            name: val,
            value: val,
          }));
        }
      });
    };


    $: {
      let col = columnByKey[sortBy];
      if (
        col !== undefined &&
        col.sortable === true &&
        typeof col.value === "function"
      ) {
        sortFunction = r => col.value(r);
      }
    }
    $: {
      // if filters are enabled, watch rows and columns
      if (showFilterHeader && columns && rows) {
        calculateFilterValues();
      }
    }


    const updateSortOrder = colKey => {
      return colKey === sortBy
        ? sortOrders[
            (sortOrders.findIndex(o => o === sortOrder) + 1) % sortOrders.length
          ]
        : sortOrders[0];
    };


    const handleClickCol = (event, col) => {
      if (col.sortable) {
        sortOrder = updateSortOrder(col.key);
        sortBy = sortOrder ? col.key : undefined;
      }
      dispatch("clickCol", { event, col, key: col.key });
    };


    const handleClickRow = (event, row) => {
      dispatch("clickRow", { event, row });
    };


    const handleClickExpand = (event, row) => {
      row.$expanded = !row.$expanded;
      const keyVal = row[expandRowKey];
      if (expandSingle && row.$expanded) {
        expanded = [keyVal];
      } else if (expandSingle) {
        expanded = [];
      } else if (!row.$expanded) {
        expanded = expanded.filter(r => r != keyVal);
      } else {
        expanded = [...expanded, keyVal];
      }
      dispatch("clickExpand", { event, row });
    };


    const handleClickCell = (event, row, key) => {
      dispatch("clickCell", { event, row, key });
    };
  </script>
  


  <table class={asStringArray(classNameTable)}>
    <thead class={asStringArray(classNameThead)}>
      {#if showFilterHeader}
        <tr>
          {#each columns as col}
            <th>
              {#if col.searchValue !== undefined}
                <input bind:value={filterSelections[col.key]} />
              {:else if filterValues[col.key] !== undefined}
                <select
                  bind:value={filterSelections[col.key]}
                  class={asStringArray(classNameSelect)}
                >
                  <option value={undefined} />
                  {#each filterValues[col.key] as option}
                    <option value={option.value}>{option.name}</option>
                  {/each}
                </select>
              {/if}
            </th>
          {/each}
          {#if showExpandIcon}
            <th />
          {/if}
        </tr>
      {/if}


      <slot name="header" {sortOrder} {sortBy}>
        <tr>
          {#each columns as col}
            <th
              on:click={e => handleClickCol(e, col)}
              class={asStringArray([
                col.sortable ? "isSortable" : "",
                col.headerClass,
              ])}
            >
              {col.title}
              {#if sortBy === col.key}
                {@html sortOrder === 1 ? iconAsc : iconDesc}
              {:else if col.sortable}
                {@html iconSortable}
              {/if}
            </th>
          {/each}
          {#if showExpandIcon}
            <th />
          {/if}
        </tr>
      </slot>
    </thead>
  
    <tbody class={asStringArray(classNameTbody)}>
      {#each c_rows as row, n}
        <slot name="row" {row} {n}>
          <tr
            on:click={e => {
              handleClickRow(e, row);
            }}
            class={asStringArray([
              classNameRow,
              row.$expanded && classNameRowExpanded,
            ])}
          >
            {#each columns as col}
              <td
                on:click={e => {
                  handleClickCell(e, row, col.key);
                }}
                class={asStringArray([col.class, classNameCell])}
              >
                {#if col.renderComponent}
                  <svelte:component
                    this={col.renderComponent.component || col.renderComponent}
                    {...col.renderComponent.props || {}}
                    {row}
                    {col}
                  />
                {:else}
                  {@html col.renderValue ? col.renderValue(row) : col.value(row)}
                {/if}
              </td>
            {/each}
            {#if showExpandIcon}
              <td
                on:click={e => handleClickExpand(e, row)}
                class={asStringArray(["isClickable", classNameCellExpand])}
              >
                {@html row.$expanded ? iconExpand : iconExpanded}
              </td>
            {/if}
          </tr>
          {#if row.$expanded}
            <tr class={asStringArray(classNameExpandedContent)}
              ><td {colspan}>
                <slot name="expanded" {row} {n} />
              </td></tr
            >
          {/if}
        </slot>
      {/each}
    </tbody>
  </table>
  
  <style>
    table {
      width: 100%;
    }
    .isSortable {
      cursor: pointer;
    }
    .isClickable {
      cursor: pointer;
    }
    tr th select {
      width: 100%;
    }
  </style>