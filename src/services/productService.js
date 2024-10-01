export async function getList(searchTerm){
    const query = searchTerm ? `name_like=${searchTerm}` : '';
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?${query}`);
    if(!response.ok){
        const error = new Error(response.statusText); 
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}

export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if(!response.ok){
        const error = new Error(response.statusText); 
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}

export async function getFeaturedList(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok){
        const error = new Error(response.statusText); 
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}