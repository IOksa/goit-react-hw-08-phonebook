import { RotatingLines } from 'react-loader-spinner';

export const RotatingLinesSpinner=()=>{
  return (
    <RotatingLines
    strokeColor="#0b5394"
    strokeWidth="5"
    animationDuration="0.75"
    width="35"
    visible={true}
  />
  )
}
