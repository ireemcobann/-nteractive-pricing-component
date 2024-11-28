pageViewRange.addEventListener('input', handlePageViewChange);
billingType.addEventListener('click', changeBillingType);

let billingTypeValue = false;


function handlePageViewChange() {
	if(billingTypeValue) {
		pricing.innerText = Number(pageViewRange.value) * 12
		pageViews.innerText = Number(pageViewRange.value * 6.25) *12
	}else {
	pricing.innerText = pageViewRange.value
	pageViews.innerText = pageViewRange.value * 6.25;
}
}


function changeBillingType() {
billingTypeValue = !billingTypeValue;
changePricing ();
}

function changePricing() {
	if(billingTypeValue) {
		pricing.innerText = (Number(pageViewRange.value) * 0.75) * 12;
        period.innerText ="/year";
		pageViews.innerText = Number(pageViewRange.value * 6.25) * 12;
	}else {
		pricing.innerText = pageViewRange.value
		period.innerText ="/month";
		pageViews.innerText= pageViewRange * 6.25;
	}
}