const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones)
    // console.log(phones);
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phones => {
        console.log(phones.image)
        const div = document.createElement('div');
        div.classList.add = `card card-compact w-96 bg-base-100 shadow-xl`;
        div.innerHTML = `
        <figure><img src="${phones.image}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        `;
        phoneContainer.appendChild(div);
    });
}
loadData()