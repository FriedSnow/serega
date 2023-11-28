export async function getAllitem(item){
    const response = await fetch('http://localhost:8080/item', {
        method: 'GET'
    });
    const result = await response.json();
    console.log(result);
    return result;
}

export async function addItem(item){
    await fetch('http://localhost:8080/item', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: item.name,
            title: item.title,
            price: item.price,
            img: item.img
        })
    });
}
export async function deleteItem(id){
    await fetch('http://localhost:8080/item/' + id, {
        method: 'DELETE'
    });
}
