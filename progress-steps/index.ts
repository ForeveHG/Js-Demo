const stepElements = document.querySelectorAll('.step')
const lineElements = document.querySelectorAll('.line')
const nextBtn = document.querySelector('.btn-next')
const prevBtn = document.querySelector('.btn-prev')
const startStep = 0
const endStep = 3
let currentStep = 0
nextBtn?.addEventListener('click', triggerNextStep)
prevBtn?.addEventListener('click', triggerPrevStep)

function triggerPrevStep() {
  if(currentStep === startStep) return
  stepElements[currentStep].classList.remove('active-step')
  lineElements[currentStep - 1].classList.remove('active-line')
  currentStep--;
  if(currentStep === startStep) prevBtn?.classList.add('btn-disabled')
  if(currentStep < endStep) nextBtn?.classList.remove('btn-disabled')
}

function triggerNextStep() {
  if(currentStep === endStep) return
  currentStep++;
  stepElements[currentStep].classList.add('active-step')
  lineElements[currentStep - 1].classList.add('active-line')
  if(currentStep === endStep) nextBtn?.classList.add('btn-disabled')
  if(currentStep > 0) prevBtn?.classList.remove('btn-disabled')
}

