// @flow 

type Props = {
    name:string,
    placeholder:string,
    id:string | number
    register: string
    type?: string
    style?: string
    options: []
};
export const Select = (props: Props) => {
    const {name , placeholder ,style } =  props
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-gray-600">{placeholder}</label>
             <select  className={`border ${style} text-base p-2 outline-none`} >
                <option value="">Select</option>
             </select>
        </div>
    );
};