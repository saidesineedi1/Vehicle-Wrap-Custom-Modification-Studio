
const VEHICLE_CATALOG = {
  porsche: {
    name: 'Porsche',
    models: ['911 GT3 / GT3 RS', '911 Turbo S', 'Taycan Turbo S', 'Panamera GTS', '718 Cayman GT4 RS', 'Macan GTS', 'Cayenne Turbo GT']
  },
  ferrari: {
    name: 'Ferrari',
    models: ['296 GTB / GTS', 'SF90 Stradale', 'F8 Tributo', 'Roma Spider', 'Purosangue', '812 Superfast / Competizione', '488 Pista']
  },
  lamborghini: {
    name: 'Lamborghini',
    models: ['Revuelto', 'Huracán Tecnica / STO', 'Urus Performante / SE', 'Aventador SVJ', 'Countach LPI 800-4']
  },
  mclaren: {
    name: 'McLaren',
    models: ['750S Coupe / Spider', '720S', 'Artura', 'McLaren GT', '765LT', 'Senna']
  },
  aston_martin: {
    name: 'Aston Martin',
    models: ['DBS Superleggera', 'Vantage F1 Edition', 'DB12 Coupe', 'DBX707 SUV', 'Valhalla']
  },
  bmw: {
    name: 'BMW',
    models: ['M3 Competition / CS', 'M4 Competition / CSL', 'M5 Competition / CS', 'M8 Gran Coupe', 'X5 M / X6 M Competition', 'i8 Roadster', 'M2 Coupe']
  },
  mercedes: {
    name: 'Mercedes-Benz',
    models: ['AMG GT Black Series / 63 Coupe', 'G63 AMG 4x4²', 'C63 S AMG', 'E63 S AMG Estate', 'S63 E Performance', 'SL63 AMG', 'CLS53 AMG']
  },
  audi: {
    name: 'Audi',
    models: ['RS6 Avant', 'RS7 Sportback', 'R8 V10 Performance', 'RSQ8', 'RS3 Sedan', 'RS5 Sportback', 'e-tron GT RS']
  },
  range_rover: {
    name: 'Land Rover / Range Rover',
    models: ['Range Rover SV LWB', 'Range Rover Sport SVR', 'Defender 110 V8', 'Defender 90 V8 Carpathian', 'Range Rover Velar SV']
  },
  rolls_royce: {
    name: 'Rolls-Royce',
    models: ['Spectre EV', 'Cullinan Black Badge', 'Ghost Black Badge', 'Phantom VIII Extended', 'Wraith Black Badge']
  },
  bentley: {
    name: 'Bentley',
    models: ['Continental GT Speed', 'Flying Spur Mulliner W12', 'Bentayga Speed', 'Bacalar / Batur']
  },
  tesla: {
    name: 'Tesla',
    models: ['Model S Plaid', 'Cybertruck Cyberbeast', 'Model X Plaid', 'Model 3 Performance', 'Model Y Performance']
  },
  nissan: {
    name: 'Nissan',
    models: ['GT-R Nismo (R35)', '400Z Performance', 'Patrol Nismo V8', 'Skyline GT-R (Classic)']
  },
  ford: {
    name: 'Ford',
    models: ['Mustang Dark Horse', 'Shelby GT500', 'F-150 Raptor R', 'Bronco Raptor', 'Ford GT Supercar']
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Corvette C8 Z06', 'Corvette E-Ray', 'Camaro ZL1 1LE', 'Silverado ZR2']
  },
  dodge: {
    name: 'Dodge',
    models: ['Challenger SRT Demon 170', 'Challenger Hellcat Redeye', 'Charger Hellcat Widebody', 'Durango SRT Hellcat']
  }
};

const formState = {
  category: 'car',
  customCategory: '',
  make: '',
  customMake: '',
  model: '',
  customModel: '',
  year: '',
  currentColor: '',
  registration: '',
  services: [],
  partialPanels: [],
  ppfCoverage: '',
  chromeDeleteFinish: '',
  preferredFinish: '',
  preferredColor: '',
  customColorHex: '#087E8B',
  customColorName: '',
  designStyle: '',
  coverage: '',
  budget: '',
  timeframe: '',
  stylingPreferences: '',
  projectDescription: '',
  appointmentDate: '',
  additionalNotes: '',
  fullName: '',
  countryCode: '+1',
  phone: '',
  email: '',
  contactMethod: 'whatsapp',
  location: '',
  consent: false,
  uploadedImages: []
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDirection();
  initStickyHeader();
  populateVehicleDropdowns();
  initFormInteractions();
  initImageUpload();
  initConditionalReveals();
  initProgressTracker();
  initDraftPersistence();
  initUrlPreselection();
  initSubmissionHandler();
});

function initThemeAndDirection() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const body = document.body;
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('aureon_theme') || 'light';
  body.classList.toggle('theme-dark', savedTheme === 'dark');
  body.classList.toggle('theme-light', savedTheme !== 'dark');

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('title', savedTheme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    themeToggleBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('theme-dark');
      body.classList.toggle('theme-light', !isDark);
      const newTheme = isDark ? 'dark' : 'light';
      localStorage.setItem('aureon_theme', newTheme);
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
  }

  const savedDir = localStorage.getItem('aureon_direction') || 'ltr';
  html.setAttribute('dir', savedDir);

  if (rtlToggleBtn) {
    rtlToggleBtn.setAttribute('title', savedDir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = html.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      html.setAttribute('dir', newDir);
      localStorage.setItem('aureon_direction', newDir);
      rtlToggleBtn.setAttribute('title', newDir === 'rtl' ? 'Switch to LTR Layout' : 'Switch to RTL Layout');
    });
  }
}

function initStickyHeader() {
  const header = document.querySelector('.customise-utility-bar') || document.getElementById('utilityBar');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 15) {
      header.classList.add('is-sticky', 'is-scrolled');
    } else {
      header.classList.remove('is-sticky', 'is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function populateVehicleDropdowns() {
  const makeSelect = document.getElementById('vehicleMake');
  const modelSelect = document.getElementById('vehicleModel');
  const yearSelect = document.getElementById('vehicleYear');

  if (!makeSelect || !modelSelect || !yearSelect) return;

  makeSelect.innerHTML = '<option value="" disabled selected>Select Vehicle Manufacturer</option>';
  Object.keys(VEHICLE_CATALOG).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = VEHICLE_CATALOG[key].name;
    makeSelect.appendChild(opt);
  });
  const otherMakeOpt = document.createElement('option');
  otherMakeOpt.value = 'other';
  otherMakeOpt.textContent = 'Other Manufacturer...';
  makeSelect.appendChild(otherMakeOpt);

  yearSelect.innerHTML = '<option value="" disabled selected>Select Manufacturing Year</option>';
  for (let yr = 2026; yr >= 2018; yr--) {
    const opt = document.createElement('option');
    opt.value = String(yr);
    opt.textContent = `${yr} (Current / Recent)`;
    yearSelect.appendChild(opt);
  }
  const yearRanges = [
    { val: '2015-2017', label: '2015 – 2017' },
    { val: '2010-2014', label: '2010 – 2014' },
    { val: '2000-2009', label: '2000 – 2009' },
    { val: 'pre-2000', label: 'Pre-2000 / Vintage Classic' }
  ];
  yearRanges.forEach(range => {
    const opt = document.createElement('option');
    opt.value = range.val;
    opt.textContent = range.label;
    yearSelect.appendChild(opt);
  });

  makeSelect.addEventListener('change', () => {
    const selectedMakeKey = makeSelect.value;
    formState.make = selectedMakeKey;
    updateModelOptions(selectedMakeKey);
    updateConditionalVehicleFields();
    updateProgressTracker();
  });

  modelSelect.addEventListener('change', () => {
    formState.model = modelSelect.value;
    updateConditionalVehicleFields();
    updateProgressTracker();
  });
}

function updateModelOptions(makeKey) {
  const modelSelect = document.getElementById('vehicleModel');
  if (!modelSelect) return;

  modelSelect.innerHTML = '<option value="" disabled selected>Select Specific Model</option>';

  if (makeKey && VEHICLE_CATALOG[makeKey]) {
    modelSelect.disabled = false;
    VEHICLE_CATALOG[makeKey].models.forEach(modelName => {
      const opt = document.createElement('option');
      opt.value = modelName;
      opt.textContent = modelName;
      modelSelect.appendChild(opt);
    });
    const otherModelOpt = document.createElement('option');
    otherModelOpt.value = 'other';
    otherModelOpt.textContent = 'Other Specific Model...';
    modelSelect.appendChild(otherModelOpt);
  } else if (makeKey === 'other') {
    modelSelect.disabled = true;
    const opt = document.createElement('option');
    opt.value = 'other';
    opt.textContent = 'Enter custom model below';
    opt.selected = true;
    modelSelect.appendChild(opt);
  } else {
    modelSelect.disabled = true;
  }
}

function initConditionalReveals() {

  const categoryInputs = document.querySelectorAll('input[name="vehicleCategory"]');
  const customCategoryBox = document.getElementById('customCategoryBox');

  categoryInputs.forEach(input => {
    input.addEventListener('change', () => {
      formState.category = input.value;
      if (customCategoryBox) {
        customCategoryBox.classList.toggle('is-revealed', input.value === 'other');
      }
      updateProgressTracker();
    });
  });

  const serviceCheckboxes = document.querySelectorAll('input[name="services"]');
  serviceCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      handleServicesChange();
      updateProgressTracker();
    });
  });

  const colorSelect = document.getElementById('preferredColor');
  const customColorBox = document.getElementById('customColorBox');

  if (colorSelect && customColorBox) {
    colorSelect.addEventListener('change', () => {
      formState.preferredColor = colorSelect.value;
      customColorBox.classList.toggle('is-revealed', colorSelect.value === 'custom');
      updateProgressTracker();
    });
  }

  const customColorPicker = document.getElementById('customColorPicker');
  const customColorHexInput = document.getElementById('customColorHexInput');
  if (customColorPicker && customColorHexInput) {
    customColorPicker.addEventListener('input', (e) => {
      customColorHexInput.value = e.target.value.toUpperCase();
      formState.customColorHex = e.target.value;
    });
    customColorHexInput.addEventListener('input', (e) => {
      if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
        customColorPicker.value = e.target.value;
        formState.customColorHex = e.target.value;
      }
    });
  }
}

function updateConditionalVehicleFields() {
  const makeSelect = document.getElementById('vehicleMake');
  const modelSelect = document.getElementById('vehicleModel');
  const customMakeBox = document.getElementById('customMakeBox');
  const customModelBox = document.getElementById('customModelBox');

  const isOtherMake = makeSelect && makeSelect.value === 'other';
  const isOtherModel = (modelSelect && modelSelect.value === 'other') || isOtherMake;

  if (customMakeBox) customMakeBox.classList.toggle('is-revealed', isOtherMake);
  if (customModelBox) customModelBox.classList.toggle('is-revealed', isOtherModel);
}

function handleServicesChange() {
  const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
  const selectedValues = Array.from(serviceCheckboxes).map(cb => cb.value);
  formState.services = selectedValues;

  const partialWrapBox = document.getElementById('partialWrapContextBox');
  const ppfBox = document.getElementById('ppfContextBox');
  const chromeDeleteBox = document.getElementById('chromeDeleteContextBox');

  if (partialWrapBox) {
    partialWrapBox.classList.toggle('is-revealed', selectedValues.includes('partial_wrap'));
  }
  if (ppfBox) {
    ppfBox.classList.toggle('is-revealed', selectedValues.includes('ppf_protection'));
  }
  if (chromeDeleteBox) {
    chromeDeleteBox.classList.toggle('is-revealed', selectedValues.includes('chrome_delete'));
  }
}

function initImageUpload() {
  const dropzone = document.getElementById('uploadDropzone');
  const fileInput = document.getElementById('referenceImageInput');
  const previewGrid = document.getElementById('uploadPreviewGrid');

  if (!dropzone || !fileInput || !previewGrid) return;

  const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('drag-active');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('drag-active');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
    fileInput.value = ''; // Reset input to allow re-uploading same file
  });

  function handleFiles(files) {
    if (!files || !files.length) return;

    Array.from(files).forEach(file => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        showCustomiseToast(`"${file.name}" is not a supported image format. (JPG, PNG, WEBP only)`, 'info');
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        showCustomiseToast(`"${file.name}" exceeds the 15MB limit.`, 'info');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = {
          id: 'img_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
          name: file.name,
          sizeFormatted: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
          dataUrl: event.target.result
        };
        formState.uploadedImages.push(imageData);
        renderImagePreviews();
      };
      reader.readAsDataURL(file);
    });
  }

  function renderImagePreviews() {
    previewGrid.innerHTML = '';
    formState.uploadedImages.forEach(img => {
      const card = document.createElement('div');
      card.className = 'preview-card';
      card.innerHTML = `
        <img src="${img.dataUrl}" alt="${img.name}" class="preview-img">
        <button type="button" class="preview-remove-btn" title="Remove reference image" aria-label="Remove image">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="preview-info">${img.name} (${img.sizeFormatted})</div>
      `;

      card.querySelector('.preview-remove-btn').addEventListener('click', () => {
        formState.uploadedImages = formState.uploadedImages.filter(item => item.id !== img.id);
        renderImagePreviews();
      });

      previewGrid.appendChild(card);
    });
  }
}

function initProgressTracker() {
  updateProgressTracker();

  const form = document.getElementById('customiseEnquiryForm');
  if (form) {
    form.addEventListener('input', () => updateProgressTracker());
    form.addEventListener('change', () => updateProgressTracker());
  }
}

function updateProgressTracker() {
  const stepVehicle = document.getElementById('stepVehicle');
  const stepStyle = document.getElementById('stepStyle');
  const stepDetails = document.getElementById('stepDetails');
  const progressLineFill = document.getElementById('progressLineFill');

  const makeVal = document.getElementById('vehicleMake')?.value;
  const modelVal = document.getElementById('vehicleModel')?.value;
  const yearVal = document.getElementById('vehicleYear')?.value;
  const vehicleCompleted = Boolean(makeVal && modelVal && yearVal);

  const hasServices = formState.services.length > 0;
  const finishVal = document.getElementById('preferredFinish')?.value;
  const styleCompleted = Boolean(hasServices || finishVal);

  const nameVal = document.getElementById('clientFullName')?.value.trim();
  const phoneVal = document.getElementById('clientPhone')?.value.trim();
  const contactCompleted = Boolean(nameVal && phoneVal);

  if (stepVehicle) {
    stepVehicle.classList.toggle('completed', vehicleCompleted);
    stepVehicle.classList.toggle('active', !vehicleCompleted);
  }

  if (stepStyle) {
    stepStyle.classList.toggle('completed', styleCompleted);
    stepStyle.classList.toggle('active', vehicleCompleted && !styleCompleted);
  }

  if (stepDetails) {
    stepDetails.classList.toggle('completed', contactCompleted);
    stepDetails.classList.toggle('active', styleCompleted && !contactCompleted);
  }

  if (progressLineFill) {
    let percent = 15;
    if (vehicleCompleted) percent = 50;
    if (vehicleCompleted && styleCompleted) percent = 80;
    if (vehicleCompleted && styleCompleted && contactCompleted) percent = 100;
    progressLineFill.style.width = `${percent}%`;
  }
}

function initDraftPersistence() {
  const saveDraftBtn = document.getElementById('saveDraftBtn');
  const DRAFT_KEY = 'aureon_customise_draft';

  if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
      saveFormDraft();
      showCustomiseToast('Enquiry draft saved locally in this browser!', 'success');
    });
  }

  const existingDraft = localStorage.getItem(DRAFT_KEY);
  if (existingDraft) {
    try {
      const parsed = JSON.parse(existingDraft);
      restoreFormDraft(parsed);
      showCustomiseToast('Restored your previously saved vehicle customisation draft.', 'info');
    } catch (e) {
      console.warn('Unable to parse draft', e);
    }
  }
}

function saveFormDraft() {
  captureFormValues();
  const DRAFT_KEY = 'aureon_customise_draft';

  const draftToSave = { ...formState, uploadedImages: [] };
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draftToSave));
}

function restoreFormDraft(draft) {
  if (!draft) return;

  if (draft.category) {
    const radio = document.querySelector(`input[name="vehicleCategory"][value="${draft.category}"]`);
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event('change'));
    }
  }
  if (draft.customCategory) {
    const el = document.getElementById('customCategoryInput');
    if (el) el.value = draft.customCategory;
  }

  if (draft.make) {
    const makeSelect = document.getElementById('vehicleMake');
    if (makeSelect) {
      makeSelect.value = draft.make;
      updateModelOptions(draft.make);
      if (draft.model) {
        const modelSelect = document.getElementById('vehicleModel');
        if (modelSelect) modelSelect.value = draft.model;
      }
      updateConditionalVehicleFields();
    }
  }

  if (draft.year) {
    const yr = document.getElementById('vehicleYear');
    if (yr) yr.value = draft.year;
  }

  if (draft.currentColor) {
    const cc = document.getElementById('currentVehicleColor');
    if (cc) cc.value = draft.currentColor;
  }

  if (draft.registration) {
    const reg = document.getElementById('vehicleRegistration');
    if (reg) reg.value = draft.registration;
  }

  if (Array.isArray(draft.services)) {
    draft.services.forEach(srv => {
      const cb = document.querySelector(`input[name="services"][value="${srv}"]`);
      if (cb) cb.checked = true;
    });
    handleServicesChange();
  }

  if (draft.preferredFinish) {
    const el = document.getElementById('preferredFinish');
    if (el) el.value = draft.preferredFinish;
  }
  if (draft.preferredColor) {
    const el = document.getElementById('preferredColor');
    if (el) {
      el.value = draft.preferredColor;
      el.dispatchEvent(new Event('change'));
    }
  }
  if (draft.designStyle) {
    const el = document.getElementById('designStyle');
    if (el) el.value = draft.designStyle;
  }
  if (draft.coverage) {
    const el = document.getElementById('coverageScope');
    if (el) el.value = draft.coverage;
  }
  if (draft.budget) {
    const el = document.getElementById('budgetRange');
    if (el) el.value = draft.budget;
  }
  if (draft.timeframe) {
    const el = document.getElementById('preferredTimeframe');
    if (el) el.value = draft.timeframe;
  }
  if (draft.stylingPreferences) {
    const el = document.getElementById('additionalStylingNotes');
    if (el) el.value = draft.stylingPreferences;
  }

  if (draft.projectDescription) {
    const el = document.getElementById('projectDescription');
    if (el) el.value = draft.projectDescription;
  }
  if (draft.appointmentDate) {
    const el = document.getElementById('appointmentDate');
    if (el) el.value = draft.appointmentDate;
  }

  if (draft.fullName) {
    const el = document.getElementById('clientFullName');
    if (el) el.value = draft.fullName;
  }
  if (draft.countryCode) {
    const el = document.getElementById('countryCodeSelect');
    if (el) el.value = draft.countryCode;
  }
  if (draft.phone) {
    const el = document.getElementById('clientPhone');
    if (el) el.value = draft.phone;
  }
  if (draft.email) {
    const el = document.getElementById('clientEmail');
    if (el) el.value = draft.email;
  }
  if (draft.location) {
    const el = document.getElementById('clientLocation');
    if (el) el.value = draft.location;
  }

  updateProgressTracker();
}

function initUrlPreselection() {
  const params = new URLSearchParams(window.location.search);
  const finishParam = params.get('finish');
  const serviceParam = params.get('service');

  let hasPreselection = false;

  if (finishParam) {
    const finishEl = document.getElementById('preferredFinish');
    if (finishEl) {
      finishEl.value = finishParam;
      formState.preferredFinish = finishParam;
      hasPreselection = true;

      const currentServices = document.querySelectorAll('input[name="services"]:checked');
      if (currentServices.length === 0) {
        const fullWrapCb = document.querySelector('input[name="services"][value="full_wrap"]');
        if (fullWrapCb) {
          fullWrapCb.checked = true;
          handleServicesChange();
        }
      }

      setTimeout(() => {
        const selectedText = finishEl.options[finishEl.selectedIndex]?.text || finishParam;
        showCustomiseToast(`Preselected ${selectedText} from Wrap Studio.`, 'success');
      }, 500);
    }
  }

  if (serviceParam) {
    const serviceCb = document.querySelector(`input[name="services"][value="${serviceParam}"]`);
    if (serviceCb) {
      serviceCb.checked = true;
      handleServicesChange();
      hasPreselection = true;
    }
  }

  if (hasPreselection) {
    updateProgressTracker();
  }
}

function captureFormValues() {
  formState.category = document.querySelector('input[name="vehicleCategory"]:checked')?.value || 'car';
  formState.customCategory = document.getElementById('customCategoryInput')?.value.trim() || '';
  formState.make = document.getElementById('vehicleMake')?.value || '';
  formState.customMake = document.getElementById('customMakeInput')?.value.trim() || '';
  formState.model = document.getElementById('vehicleModel')?.value || '';
  formState.customModel = document.getElementById('customModelInput')?.value.trim() || '';
  formState.year = document.getElementById('vehicleYear')?.value || '';
  formState.currentColor = document.getElementById('currentVehicleColor')?.value.trim() || '';
  formState.registration = document.getElementById('vehicleRegistration')?.value.trim() || '';

  const checkedServices = document.querySelectorAll('input[name="services"]:checked');
  formState.services = Array.from(checkedServices).map(cb => cb.value);

  formState.preferredFinish = document.getElementById('preferredFinish')?.value || '';
  formState.preferredColor = document.getElementById('preferredColor')?.value || '';
  formState.customColorName = document.getElementById('customColorNameInput')?.value.trim() || '';
  formState.designStyle = document.getElementById('designStyle')?.value || '';
  formState.coverage = document.getElementById('coverageScope')?.value || '';
  formState.budget = document.getElementById('budgetRange')?.value || '';
  formState.timeframe = document.getElementById('preferredTimeframe')?.value || '';
  formState.stylingPreferences = document.getElementById('additionalStylingNotes')?.value.trim() || '';

  formState.projectDescription = document.getElementById('projectDescription')?.value.trim() || '';
  formState.appointmentDate = document.getElementById('appointmentDate')?.value || '';
  formState.additionalNotes = document.getElementById('additionalNotes')?.value.trim() || '';

  formState.fullName = document.getElementById('clientFullName')?.value.trim() || '';
  formState.countryCode = document.getElementById('countryCodeSelect')?.value || '+1';
  formState.phone = document.getElementById('clientPhone')?.value.trim() || '';
  formState.email = document.getElementById('clientEmail')?.value.trim() || '';
  formState.contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || 'whatsapp';
  formState.location = document.getElementById('clientLocation')?.value.trim() || '';
  formState.consent = document.getElementById('privacyConsentCheckbox')?.checked || false;
}

function initFormInteractions() {

  const allInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
  allInputs.forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });

  const appDate = document.getElementById('appointmentDate');
  if (appDate) {
    const today = new Date().toISOString().split('T')[0];
    appDate.min = today;
  }
}

function validateForm() {
  let isValid = true;
  let firstInvalidEl = null;

  function markError(elId, hasError) {
    const el = document.getElementById(elId);
    if (!el) return;
    const group = el.closest('.form-group');
    if (group) {
      group.classList.toggle('has-error', hasError);
    }
    if (hasError && !firstInvalidEl) {
      firstInvalidEl = el;
    }
    if (hasError) isValid = false;
  }

  const makeSelect = document.getElementById('vehicleMake');
  markError('vehicleMake', !makeSelect || !makeSelect.value);

  if (makeSelect && makeSelect.value === 'other') {
    const customMake = document.getElementById('customMakeInput');
    markError('customMakeInput', !customMake || !customMake.value.trim());
  }

  const modelSelect = document.getElementById('vehicleModel');
  if (makeSelect && makeSelect.value !== 'other') {
    markError('vehicleModel', !modelSelect || !modelSelect.value);
  }
  if (modelSelect && modelSelect.value === 'other') {
    const customModel = document.getElementById('customModelInput');
    markError('customModelInput', !customModel || !customModel.value.trim());
  }

  const yearSelect = document.getElementById('vehicleYear');
  markError('vehicleYear', !yearSelect || !yearSelect.value);

  const categoryOther = document.querySelector('input[name="vehicleCategory"][value="other"]');
  if (categoryOther && categoryOther.checked) {
    const customCat = document.getElementById('customCategoryInput');
    markError('customCategoryInput', !customCat || !customCat.value.trim());
  }

  const checkedServices = document.querySelectorAll('input[name="services"]:checked');
  const serviceErr = document.getElementById('servicesErrorMessage');
  if (checkedServices.length === 0) {
    if (serviceErr) serviceErr.style.display = 'flex';
    isValid = false;
    if (!firstInvalidEl) firstInvalidEl = document.querySelector('.services-cards-grid');
  } else {
    if (serviceErr) serviceErr.style.display = 'none';
  }

  const desc = document.getElementById('projectDescription');
  markError('projectDescription', !desc || desc.value.trim().length < 5);

  const name = document.getElementById('clientFullName');
  markError('clientFullName', !name || name.value.trim().length < 2);

  const phone = document.getElementById('clientPhone');
  const phoneVal = phone ? phone.value.trim().replace(/\D/g, '') : '';
  markError('clientPhone', phoneVal.length < 7);

  const email = document.getElementById('clientEmail');
  if (email && email.value.trim().length > 0) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    markError('clientEmail', !emailPattern.test(email.value.trim()));
  }

  const consentCb = document.getElementById('privacyConsentCheckbox');
  const consentErr = document.getElementById('consentErrorMessage');
  if (!consentCb || !consentCb.checked) {
    if (consentErr) consentErr.style.display = 'flex';
    isValid = false;
    if (!firstInvalidEl) firstInvalidEl = consentCb;
  } else {
    if (consentErr) consentErr.style.display = 'none';
  }

  if (!isValid && firstInvalidEl) {
    firstInvalidEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (typeof firstInvalidEl.focus === 'function') firstInvalidEl.focus();
  }

  return isValid;
}

function initSubmissionHandler() {
  const form = document.getElementById('customiseEnquiryForm');
  const submitBtn = document.getElementById('submitEnquiryBtn');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showCustomiseToast('Please review the highlighted required fields.', 'info');
      return;
    }

    captureFormValues();

    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Preparing Atelier Specification...</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      localStorage.removeItem('aureon_customise_draft');

      showConfirmationModal();
    }, 900);
  });
}

function showConfirmationModal() {
  const modal = document.getElementById('confirmationModal');
  if (!modal) return;

  const refCode = 'AC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
  const refEl = document.getElementById('confRefCode');
  if (refEl) refEl.textContent = refCode;

  const makeName = formState.make === 'other' ? formState.customMake : (VEHICLE_CATALOG[formState.make]?.name || formState.make);
  const modelName = formState.model === 'other' ? formState.customModel : formState.model;
  const vehicleStr = `${formState.year} ${makeName} ${modelName}`;
  const confVehicle = document.getElementById('confVehicleVal');
  if (confVehicle) confVehicle.textContent = vehicleStr;

  const confContact = document.getElementById('confContactVal');
  if (confContact) {
    confContact.textContent = `${formState.fullName} (${formState.countryCode} ${formState.phone})`;
  }

  const confFinish = document.getElementById('confFinishVal');
  if (confFinish) {
    const colorLabel = formState.preferredColor === 'custom' ? (formState.customColorName || formState.customColorHex) : formState.preferredColor;
    confFinish.textContent = `${formState.preferredFinish || 'Consultation Choice'} • ${colorLabel || 'Client Choice'}`;
  }

  const servicesContainer = document.getElementById('confServicesList');
  if (servicesContainer) {
    servicesContainer.innerHTML = '';
    const serviceNameMap = {
      full_wrap: 'Full Vehicle Wrap',
      partial_wrap: 'Partial Wrap',
      matte_satin: 'Matte / Satin Finish',
      gloss_metallic: 'Gloss / Metallic Finish',
      colour_change: 'Colour Change',
      ppf_protection: 'Stealth PPF Armor',
      chrome_delete: 'Chrome Delete',
      body_kit: 'Body Kit Installation',
      exterior_mods: 'Exterior Modifications',
      interior_custom: 'Interior Bespoke',
      alloy_wheels: 'Alloy Wheels & Styling',
      lighting_mods: 'Lighting Modification',
      detailing: 'Paint Correction & Ceramic',
      custom_build: 'Custom Atelier Build'
    };

    formState.services.forEach(srvKey => {
      const tag = document.createElement('span');
      tag.className = 'conf-service-tag';
      tag.textContent = serviceNameMap[srvKey] || srvKey;
      servicesContainer.appendChild(tag);
    });
  }

  const waBtn = document.getElementById('confWhatsAppBtn');
  if (waBtn) {
    const waText = encodeURIComponent(
      `Hello Aureon Customs Concierge,\n\nI have prepared a bespoke vehicle customisation specification (Ref: ${refCode}).\n\n` +
      `• Vehicle: ${vehicleStr}\n` +
      `• Desired Services: ${formState.services.join(', ')}\n` +
      `• Preferred Finish: ${formState.preferredFinish || 'Undecided'}\n` +
      `• Client Name: ${formState.fullName}\n` +
      `• Phone: ${formState.countryCode} ${formState.phone}\n\n` +
      `Looking forward to reserving an atelier consultation slot.`
    );
    waBtn.href = `https://wa.me/?text=${waText}`;
  }

  const downloadBtn = document.getElementById('confDownloadSummaryBtn');
  if (downloadBtn) {
    downloadBtn.onclick = (e) => {
      e.preventDefault();
      downloadEnquirySummary(refCode, vehicleStr);
    };
  }

  const closeBtn = document.getElementById('confCloseModalBtn');
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    };
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function downloadEnquirySummary(refCode, vehicleStr) {
  const summaryContent = 
`=============================================================
AUREON CUSTOMS — VEHICLE CUSTOMISATION SPECIFICATION
Reference Number: ${refCode}
Date: ${new Date().toLocaleDateString()}
=============================================================

1. VEHICLE DETAILS
- Category: ${formState.category.toUpperCase()}
- Vehicle: ${vehicleStr}
- Current Finish: ${formState.currentColor || 'OEM'}
- Registration: ${formState.registration || 'Private / Unregistered'}

2. SELECTED SERVICES
${formState.services.map(s => `- ${s}`).join('\n')}

3. STYLE & FINISH PREFERENCES
- Finish Type: ${formState.preferredFinish || 'Atelier Recommendation'}
- Target Hue: ${formState.preferredColor} ${formState.customColorName ? '(' + formState.customColorName + ')' : ''}
- Design Style: ${formState.designStyle || 'Bespoke'}
- Coverage Scope: ${formState.coverage || 'Full Vehicle'}
- Estimated Budget: ${formState.budget || 'Flexible / Inquire'}
- Target Timeframe: ${formState.timeframe || 'Flexible'}

4. PROJECT SCOPE
${formState.projectDescription}

5. CLIENT CONTACT
- Name: ${formState.fullName}
- Phone: ${formState.countryCode} ${formState.phone}
- Email: ${formState.email || 'Not provided'}
- Preferred Contact: ${formState.contactMethod.toUpperCase()}
- Location: ${formState.location || 'Studio Bay'}

=============================================================
Aureon Customs Master Atelier • VIP Confidentiality Guaranteed
=============================================================`;

  const blob = new Blob([summaryContent], { type: 'text/plain;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = `${refCode}_Aureon_Customs_Spec.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);
  showCustomiseToast('Enquiry summary downloaded successfully.', 'success');
}

function showCustomiseToast(message, type = 'info') {
  const existingToast = document.querySelector('.customise-toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `customise-toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}
