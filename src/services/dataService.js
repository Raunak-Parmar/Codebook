export async function getUser () {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    const requestOptions = {
        method:"GET",
        headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`}
    }
    const response = await fetch (`${process.env.REACT_APP_HOST}/600/users/${cbid}`,requestOptions);
    if(!response.ok){
        const error = new Error(response.statusText); 
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders () {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const requestOptions = {
            method: "GET",
            headers: {"Content-Type":"application/json",Authorization: `Bearer ${token}`}
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?yser.id=${cbid}`,requestOptions);
    if(!response.ok){
        const error = new Error(response.statusText); 
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}

export async function createOrder (cartList,total,user) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    // const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const order = {
        cartList:cartList,
        amount_paid:total,
        quantity:cartList.length,
        user :{
            name:user.name,
            email:user.email,
            id:user.id
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,{
    method:"POST",
    headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`},
    body:JSON.stringify(order)
    });
    if(!response.ok){
        const error = new Error(response.statusText); 
        error.status = response.status;
        throw error;
    }
    const data = await response.json();
    return data;
}