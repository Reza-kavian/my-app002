// pages/dynamicpage/[id].js

import { useRouter } from "next/router";

export default function DynamicPage({ffd}) {
    const router = useRouter();
    return (
        <div>
            This is Dynamic Page, accessed from
            the route <b>{router.asPath}</b>{" "}
            <br />
            <h1>{ ffd.name}</h1>
            <h1>{JSON.stringify(ffd) }</h1>
             {/* {"name":"reza","age":"page002"} */}
        </div>
    );
}

export async   function getStaticPaths(){
    return{
        paths:[
           {
            params:{
              id:'page0011'
           }
        } ,
           {
            params:{
               id:'page0022'
           }
        }
        ],
        fallback: true,
    } 
} 

export  async  function getStaticProps({params}){
    return{
        props:{
            ffd: {
                name:'reza',
                age:params.id,
            }
        }
    }
} 
 
    
    
       
 