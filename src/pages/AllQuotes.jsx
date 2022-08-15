import QuoteList from "../components/quotes/QuoteList"
import useHttp from "../components/hooks/hooks/use-http";
 import { getAllQuotes } from "../components/lib/lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";


 

const AllQuotes=()=>{

  const{sendRequest,status,data:LoadedQuotes,error}=useHttp(getAllQuotes,true);

  useEffect(()=>{
    sendRequest()
  },[sendRequest])

  if(status==='pending'){
    return(
      <div className="centered">
        <LoadingSpinner/>
      </div>
    )
  }

  if(error){
    return <p className="centered focused">{error}</p>
  }


  if(status==='completed' && (!LoadedQuotes || LoadedQuotes.length===0)){
    return<NoQuotesFound/>
  }
    return<>
    <QuoteList quotes={LoadedQuotes}/>
    </>
}
export default AllQuotes