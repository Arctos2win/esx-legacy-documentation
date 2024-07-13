export const ArgumentsTable = ({ rows, isTable }) =>(
    <table className="_block _overflow-x-scroll nextra-scrollbar _mt-6 _p-0 first:_mt-0">
        <thead>
            <tr className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20">
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">{isTable ? "Key" : "Argument"}</th>
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Data Type</th>
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Optional</th>
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Default Value</th>
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Description</th>
            </tr>
        </thead>
        <tbody>
            {rows.map(row => 
                <tr className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20" key={row.arg}>
                <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600">{row.arg}</td>
                <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600 _whitespace-nowrap">{row.type || "any"}</td>
                <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600">{row.optional ? "Yes" : "No"}</td> 
                <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600">{row.defaultValue}</td>
                <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600">{row.description}</td>
            </tr>
            )}
        </tbody>
    </table>
);

export const OutputTable = ({ rows, isTable }) =>(
    <table className="_block _overflow-x-scroll nextra-scrollbar _mt-6 _p-0 first:_mt-0">
        <thead>
            <tr className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20">
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">{isTable ? "Key" : "Value"}</th>
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Data Type</th>
                <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Description</th>
            </tr>
        </thead>
        <tbody>
            {rows.map(row => 
                <tr className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20" key={row.arg}>
                    <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600">{row.arg}</td>
                    <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600 _whitespace-nowrap">{row.type || "any"}</td>
                    <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600">{row.description}</td>
                </tr>
            )}
        </tbody>
    </table>
);