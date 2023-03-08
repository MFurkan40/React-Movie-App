import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";

const Pagination = ({ setCurrentPage, totalPages }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(1);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
    setCurrentPage(e.page + 1);
  };

  const template1 = {
    layout: "PrevPageLink PageLinks NextPageLink  ",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className="relative block rounded bg-transparent py-3 px-4 text-md text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Previous</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className="relative block rounded bg-transparent py-3 px-4 text-md text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Next</span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
  };

  return (
    <div className="!bg-gray-900">
      <Paginator
        className="dark:!bg-gray-900"
        template={template1}
        first={first}
        rows={rows}
        totalRecords={totalPages}
        pageLinkSize={10}
        onPageChange={(e) => onPageChange(e)}
      />
    </div>
  );
};

export default Pagination;
