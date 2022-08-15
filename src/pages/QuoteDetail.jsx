import {  useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../components/hooks/hooks/use-http";
import { getSingleQuote } from "../components/lib/lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const QuoteDetails = () => {
  const params = useParams();
const {id}=params

  const{sendRequest,status,data:loadedQuotes,error}=useHttp(getSingleQuote,true)
  


useEffect(()=>{
  sendRequest(id)
},[sendRequest,id])



if(status==='pending'){
  return <div className="centered">
    <LoadingSpinner/>
  </div>
}

if(error){
  return <p>No Quote Found</p>
}




if (!loadedQuotes.text) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
    </>
  );
};
export default QuoteDetails;
