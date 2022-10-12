var stepElements = document.querySelectorAll('.step');
var lineElements = document.querySelectorAll('.line');
var nextBtn = document.querySelector('.btn-next');
var prevBtn = document.querySelector('.btn-prev');
var startStep = 0;
var endStep = 3;
var currentStep = 0;
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', triggerNextStep);
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', triggerPrevStep);
function triggerPrevStep() {
    if (currentStep === startStep)
        return;
    stepElements[currentStep].classList.remove('active-step');
    lineElements[currentStep - 1].classList.remove('active-line');
    currentStep--;
    if (currentStep === startStep)
        prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.classList.add('btn-disabled');
    if (currentStep < endStep)
        nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.remove('btn-disabled');
}
function triggerNextStep() {
    if (currentStep === endStep)
        return;
    currentStep++;
    stepElements[currentStep].classList.add('active-step');
    lineElements[currentStep - 1].classList.add('active-line');
    if (currentStep === endStep)
        nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.add('btn-disabled');
    if (currentStep > 0)
        prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.classList.remove('btn-disabled');
}
