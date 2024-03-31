import { useSelector } from 'react-redux';

export default function useBusket(){
    const { busket } = useSelector((state) => state);
    
    return { busket }
}
