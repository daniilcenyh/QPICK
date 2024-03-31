import { useSelector } from 'react-redux';

export default function useProducts(){
    const { products } = useSelector((state) => state);
    
    return { products }
}
