import React, { createContext } from 'react'
import { firestore } from 'firebase/firestore';

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {
    // defining an inntial state with an empty array of products
    state = {
        products: []
    }

    componentDidMount() {
        //copy of  the state and retrieve products and push to arrray
        const prevProducts = this.state.products;
        firestore.collection('Products').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductImg: change.doc.data().ProductImg
                    })
                }
                // update the statment
                this.setState({
                    products: prevProducts
                })
            })
        })

    }
    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

// look his app.js
