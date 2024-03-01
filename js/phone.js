const loadData = async (searchText2) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText2}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones)
    // console.log(phones);
}

const displayPhone = (phones) => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAll = document.getElementById('show-all');
    if (phones.length > 12) {
        showAll.classList.remove('hidden');
    } else {
        showAll.classList.add('hidden');
    }

    phones = phones.slice(0, 6);


    phones.forEach(phones => {
        // console.log(phones)
        const div = document.createElement('div');
        div.classList = `card card-compact bg-green-200 mb-5 p-4 shadow-xl`;
        div.innerHTML = `
        <figure><img src="${phones.image}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phones.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button onclick="handelShowDetails('${phones.slug}')" class="btn btn-primary">Show Ditels</button>
                        </div>
                    </div>
        `;
        phoneContainer.appendChild(div);
    });
    togolLoadingSpiner(false);
}


// handle search --------
const handalSearch = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    loadData(searchText);
    togolLoadingSpiner(true);
}

const handalSearch2 = () => {
    const searchFiled2 = document.getElementById('search-field2');
    searchText2 = searchFiled2.value;
    loadData(searchText2);
}


const togolLoadingSpiner = (isLoading) => {
    const loadingSpiner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpiner.classList.remove('hidden');
    }
    else {
        loadingSpiner.classList.add('hidden')
    }
}


const handelShowDetails = async (id) => {
    // console.log('show details: ', id)

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;

    showphoneDitales(phone)
}

const showphoneDitales = (phone) => {
    console.log(phone)

    const phoneName = document.getElementById('show-details-phone-name');
    phoneName.innerText = phone.name;

    const showDatileContainer = document.getElementById('show-details-container');
    showDatileContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p class="font-bold"><span>Stroge:</span>${phone?.mainFeatures?.storage}</p>
        <p class="font-bold"><span>GPS:</span>${phone?.others?.GPS}</p>
        <p class="font-bold"><span>Brand: </span>${phone?.brand}</p>
        <p class="font-bold"><span>Relese Date: </span>${phone?.releaseDate}</p>    
    `;

    show_modal.showModal();
}