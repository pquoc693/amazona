import Reat from 'react';
import data from '../data';
export default function ProductScreen(props){
    const product =data.product.find((x) => x._id === props.match.params.id);
    return( <div>

    </div>)
}