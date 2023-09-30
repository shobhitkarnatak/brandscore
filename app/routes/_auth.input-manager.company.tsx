/** @format */

import { Table } from "~/components/common/Table";
import { InputManagerCompanyColumn,  } from "~/utils/headers";

 
export default function Company() {
    const data:any = [
        {
            NEW_LAST_UPDATE:"23-3-4",
            TWITTER_LAST_UPDATE:"34-44-4",
            FACEBOOK_LAST_UPDATE : "21-3-4",
            QUERY_NAME: "LBS",
            KEYWORDS:"HHDH , HHH",
            NEW_KEYWORDS:"333",
            TWITTER_KEYWORDS:"3344",
            FACEBOOK_PAGE:"uff",
            TWITTER_HANDLE:"4ufhy"
        },
        {
            NEW_LAST_UPDATE:"23-3-4",
            TWITTER_LAST_UPDATE:"34-44-4",
            FACEBOOK_LAST_UPDATE : "21-3-4",
            QUERY_NAME: "LBS",
            KEYWORDS:"HHDH , HHH",
            NEW_KEYWORDS:"333",
            TWITTER_KEYWORDS:"3344",
            FACEBOOK_PAGE:"uff",
            TWITTER_HANDLE:"4ufhy"
        },
    ]
             
           
       
	return (
		<div className='mt-8'>
	 		<Table tableData={data || []} column={InputManagerCompanyColumn} />
		</div>
	);
}
