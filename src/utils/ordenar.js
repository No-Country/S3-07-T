import { ASC, DSC } from "../redux/constantes";

const Ordenar = (array, orden, prop) => {
    let newArray=[...array];
    if(orden === ASC ) {
        let orderedArray = newArray.sort(
            function (a, b) { 
                if (a[prop] > b[prop]) { return 1 }
                if (a[prop] < b[prop]) { return -1 }
                return 0;
            });
        return orderedArray;
    }
    if(orden === DSC) {
        let orderedArray2 = newArray.sort(
            function (a, b) { 
                if (a[prop] > b[prop]) { return -1 }
                if (a[prop] < b[prop]) { return 1 }
                return 0;
            });
        return orderedArray2;
    }
}
export default Ordenar;