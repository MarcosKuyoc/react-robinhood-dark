import { useParams } from "wouter";

export const Details = () => {
  const  params = useParams()

  return (
    <div>Details {params.symbol}</div>
  )
}
