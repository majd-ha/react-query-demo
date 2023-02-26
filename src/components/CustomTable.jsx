import React from "react";

export default function CustomTable({ tabname, data, err }) {
  return (
    <div className="w-[800px] rounded-lg h-[550px]">
      {err ? (
        <div className="text-red-700 text-center border border-red-700 rounded-lg">
          {err.message}
        </div>
      ) : (
        <span></span>
      )}
      <h1 className="w-full rounded-t-lg bg-red-500 text-yellow-200 text-2xl pt-8 h-20 text-center">
        {tabname}
      </h1>
      <table className="w-[800px] border border-red-500">
        <tbody>
          <tr>
            <th className={err ? "text-red-900 h-9" : "h-9"}> name</th>
            <th className={err ? "text-red-900 h-9" : "h-9"}>alte Ego</th>
          </tr>

          {data?.map((el) => {
            return (
              <tr key={el.id}>
                <td className="text-center border border-red-500 h-9">
                  {el.name}
                </td>
                <td className="text-center border border-red-500 h-9">
                  {el.alterEgo}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
