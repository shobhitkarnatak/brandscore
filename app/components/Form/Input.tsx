// @flow 

type Props = {
    name:string,
    placeholder:string,
    id:string | number
    register: string
    type?: string
    style?: string
};
export const Input = (props: Props) => {
    const {name , placeholder ,style } =  props
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-gray-600">{placeholder}</label>
             <input type="text" className={`border ${style} text-base p-2 outline-none`} />
        </div>
    );
};