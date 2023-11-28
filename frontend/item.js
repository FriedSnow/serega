export function createItem(name, price, title, img){
    let item = document.createElement('div');
    let image = document.createElement('img');
    let divBody = document.createElement('div');
    let h5 = document.createElement('p');
    let ptitle = document.createElement('p');
    let pPrice = document.createElement('p');
    let btnGroup = document.createElement('div');
    let btnDelete = document.createElement('button');


// STYLE
    item.classList.add('card', 'm-3');
    item.style.width = "25rem";
    item.style.float = "left";

    image.classList.add('card-img-top');
    image.src = img;

    divBody.classList.add('card-body');

    h5.classList.add('card-title');
    h5.textContent = name;
    h5.style.color = '#FFF';
    h5.style.textAlign = 'center';
    h5.style.transform = 'uppercase';
    h5.style.fontSize = '35px'

    ptitle.classList.add('car-text');
    ptitle.innerText = title;

    pPrice.innerText = price;

    btnGroup.classList.add('btn-group', 'float-end');

    btnDelete.classList.add('btn', 'btn-outline-danger');
    btnDelete.textContent = "Удалить";

    btnGroup.append(btnDelete);
    divBody.append(h5, ptitle, pPrice, btnGroup);
    item.append(image, divBody);
    return {item, btnDelete}
}
