const loadingPhones = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=phone`);
    const data = await response.json();
    const phoneArray = data.data
    showThePhones(phoneArray)
}

const loadingThePhones = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phoneArray = data.data
    showThePhones(phoneArray)
}
const showThePhones = allPhone => {
    const phoneSection = document.getElementById("phone-section")
    phoneSection.innerHTML = ""
    const showAllButton = document.getElementById("show-all-button");
    if(allPhone.length > 12){
        showAllButton.classList.remove("hidden")
    }
    else{
        showAllButton.classList.add("hidden")
    }

    allPhone = allPhone.slice(0,12)

    allPhone.forEach(phone => {
        const div = document.createElement("div")
        div.classList = "p-3 lg:p-6 border-[1px] border-[#CFCFCF] rounded-lg flex flex-col items-center"
        div.innerHTML = `<div class="bg-[#0D6EFD0D] rounded-lg p-4 lg:p-10 mb-3 lg:mb-6">
        <img src="${phone.image}" alt="iphone">
    </div>
    <div class="flex flex-col items-center">
        <h1 class="text-[#403F3F] text-2xl font-bold leading-[38px] mb-5">${phone.phone_name}</h1>
        <p class="text-[#706F6F] text-lg leading-[30px] mb-2 text-center">There are many variations of
            passages of available, but the majority have suffered</p>
        <h1 class="text-[#403F3F] text-2xl font-bold leading-[38px] mb-4">$999</h1>
        <div>
            <button onclick = "showDetail('${phone.slug}'); show_detail.showModal()" class="btn bg-primary-button text-white text-xl font-bold leading-7 border-none">Show
                Details</button>
        </div>
    </div>`
    phoneSection.appendChild(div);
    });
toggleLoading(false)
}

const searchYourPhone = () => {
    toggleLoading(true)
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;
    console.log(searchText);
    loadingThePhones(searchText)
}

const toggleLoading = (loading) => {
   const loadingSpinner = document.getElementById("loading-spinner")
   if (loading){
    loadingSpinner.classList.remove("hidden")
   }
   else{
    loadingSpinner.classList.add("hidden")
   }
}

const showDetail = async(id) => {
const response =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
const data = await response.json()
const details = data.data;
console.log(details);
}

loadingPhones()