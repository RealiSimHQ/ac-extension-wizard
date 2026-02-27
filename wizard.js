// AC Extension Wizard — RealiSimHQ
// Checklist → Fill-in → Generate

const FEATURES = [
  {
    id: 'audio_pitch',
    label: 'Custom Audio Pitch',
    desc: 'Engine & skid pitch multipliers',
    icon: '🔊',
    fields: [
      { id: 'engine_ext_pitch', label: 'ENGINE_EXT Pitch', default: '1', type: 'number', step: '0.05' },
      { id: 'engine_int_pitch', label: 'ENGINE_INT Pitch', default: '1', type: 'number', step: '0.05' },
      { id: 'skid_ext_pitch', label: 'SKID_EXT Pitch', default: '0.65', type: 'number', step: '0.05' },
      { id: 'skid_int_pitch', label: 'SKID_INT Pitch', default: '0.65', type: 'number', step: '0.05' },
    ]
  },
  {
    id: 'audio_volume',
    label: 'Custom Audio Volume',
    desc: 'Per-channel volume levels',
    icon: '🎚️',
    fields: [
      { id: 'vol_engine_ext', label: 'ENGINE_EXT', default: '4.4', type: 'number', step: '0.1' },
      { id: 'vol_engine_int', label: 'ENGINE_INT', default: '2.2', type: 'number', step: '0.1' },
      { id: 'vol_gear_ext', label: 'GEAR_EXT', default: '1.0', type: 'number', step: '0.1' },
      { id: 'vol_gear_int', label: 'GEAR_INT', default: '2.5', type: 'number', step: '0.1' },
      { id: 'vol_bodywork', label: 'BODYWORK', default: '2.5', type: 'number', step: '0.1' },
      { id: 'vol_wind', label: 'WIND', default: '0.7', type: 'number', step: '0.1' },
      { id: 'vol_dirt', label: 'DIRT', default: '0.7', type: 'number', step: '0.1' },
      { id: 'vol_down_shift', label: 'DOWN_SHIFT', default: '2.0', type: 'number', step: '0.1' },
      { id: 'vol_horn', label: 'HORN', default: '1.0', type: 'number', step: '0.1' },
      { id: 'vol_gear_grind', label: 'GEAR_GRIND', default: '2.1', type: 'number', step: '0.1' },
      { id: 'vol_backfire_ext', label: 'BACKFIRE_EXT', default: '4.5', type: 'number', step: '0.1' },
      { id: 'vol_backfire_int', label: 'BACKFIRE_INT', default: '4.1', type: 'number', step: '0.1' },
      { id: 'vol_transmission', label: 'TRANSMISSION', default: '2.1', type: 'number', step: '0.1' },
      { id: 'vol_limiter', label: 'LIMITER', default: '2.6', type: 'number', step: '0.1' },
      { id: 'vol_turbo', label: 'TURBO', default: '4.0', type: 'number', step: '0.1' },
      { id: 'vol_skid_ext', label: 'SKID_EXT', default: '4', type: 'number', step: '0.1' },
      { id: 'vol_skid_int', label: 'SKID_INT', default: '2', type: 'number', step: '0.1' },
    ]
  },
  {
    id: 'ext_glass',
    label: 'Exterior Glass Reflection',
    desc: 'Updated exterior glass shader',
    icon: '🪟',
    fields: [
      { id: 'ext_glass_mat', label: 'Exterior Glass Material(s)', hint: 'CM Showroom — click the glass, copy material name', paste: true },
    ]
  },
  {
    id: 'int_glass',
    label: 'Interior Windscreen Shader',
    desc: 'Updated interior windscreen',
    icon: '🚗',
    fields: [
      { id: 'int_glass_mat', label: 'Interior Window Material(s)', hint: 'Click interior window in CM Showroom', paste: true },
    ]
  },
  {
    id: 'shaking_exhaust',
    label: 'Shaking Exhaust / Shifter',
    desc: 'Animated exhaust tips or shifter',
    icon: '💨',
    repeater: true,
    fields: [
      { id: 'exhaust_mesh', label: 'Mesh Name', hint: 'Click exhaust/shifter in CM Showroom', paste: true },
      { id: 'exhaust_point', label: 'POINT_0 (x, y, z)', default: '1, 2, 3' },
      { id: 'exhaust_radius', label: 'POINT_0_RADIUS', default: '1', type: 'number', step: '0.1' },
      { id: 'exhaust_exp', label: 'POINT_0_EXP', default: '1', type: 'number', step: '0.1' },
      { id: 'exhaust_scale', label: 'POINT_0_SCALE (x, y, z)', default: '0.35, 0.35, 0.3' },
    ]
  },
  {
    id: 'underside_dark',
    label: 'Wheel Well / Undercarriage Shadows',
    desc: 'Darker wheel wells and underside',
    icon: '⬛',
    fields: [
      { id: 'underside_mats', label: 'Underside Material(s)', hint: 'Material names for dark areas', paste: true },
    ]
  },
  {
    id: 'smoke_collider',
    label: 'Smoke Collider',
    desc: 'Exterior mesh that touches ground/wall',
    icon: '💥',
    fields: [
      { id: 'collider_mesh', label: 'Collider Mesh', hint: 'Mesh for smoke/spark collision', paste: true },
    ]
  },
  {
    id: 'carpaint_mat',
    label: 'Carpaint Reflection',
    desc: 'Improved body carpaint shader',
    icon: '✨',
    fields: [
      { id: 'carpaint_material', label: 'Carpaint Material', hint: 'Main body paint material name', paste: true },
    ]
  },
  {
    id: 'damage_tex',
    label: 'Visual Damage',
    desc: 'Damage, dust, and dirt textures',
    icon: '💔',
    fields: [
      { id: 'damage_materials', label: 'Body Material(s)', hint: 'Usually same as carpaint material', paste: true },
      { id: 'damage_ao_dir', label: 'AO Map Direction', type: 'choice', choices: [
        { value: 'V', label: 'Vertical' }, { value: 'H', label: 'Horizontal' }
      ], default: 'V' },
    ]
  },
  {
    id: 'deforming_hood',
    label: 'Deforming Hood',
    desc: 'Animated hood deformation on crash',
    icon: '🔨',
    fields: [
      { id: 'hood_name', label: 'Hood Mesh Name (optional)', hint: 'Leave blank for auto-detect', paste: true },
    ]
  },
  {
    id: 'gold_rims',
    label: 'Gold Rim Texture',
    desc: 'Metallic gold rim material',
    icon: '🥇',
    fields: [
      { id: 'gold_rim_mats', label: 'Gold Rim Material(s)', paste: true },
    ]
  },
  {
    id: 'silver_rims',
    label: 'Silver Rim Texture',
    desc: 'Metallic silver rim material',
    icon: '🥈',
    fields: [
      { id: 'silver_rim_mats', label: 'Silver Rim Material(s)', paste: true },
    ]
  },
  {
    id: 'painted_tex',
    label: 'Painted Texture',
    desc: 'Custom painted surface shader',
    icon: '🎨',
    fields: [
      { id: 'painted_tex_mats', label: 'Painted Material(s)', paste: true },
    ]
  },
  {
    id: 'ext_chrome',
    label: 'Exterior Chrome',
    desc: 'Chrome metal material',
    icon: '🪞',
    fields: [
      { id: 'chrome_mats', label: 'Chrome Material(s)', paste: true },
    ]
  },
  {
    id: 'underglow_lights',
    label: 'Underglow Lights',
    desc: 'LED strips under the car',
    icon: '💡',
    fields: [
      { id: 'ug_color_from', label: 'Color From (R, G, B)', default: '0, 70, 20' },
      { id: 'ug_color_to', label: 'Color To (R, G, B)', default: '70, 0, 50' },
      { id: 'ug_range', label: 'Range', default: '2.0', type: 'number', step: '0.1' },
      { id: 'ug_spot', label: 'Spot', default: '170', type: 'number', step: '10' },
      { id: 'ug_blinking', label: 'Blinking', type: 'choice', choices: [
        { value: '1', label: 'Yes' }, { value: '0', label: 'No' }
      ], default: '1' },
    ]
  },
  {
    id: 'emissive_extra',
    label: 'Hide Parts',
    desc: 'Make parts invisible via emissive toggle',
    icon: '👻',
    fields: [
      { id: 'emissive_name', label: 'Part Name/Mesh to Hide', paste: true },
      { id: 'emissive_color', label: 'COLOR (r, g, b)', default: '1, 0, 0' },
      { id: 'emissive_location', label: 'Location', type: 'choice', choices: [
        { value: 'FRONT', label: 'Front' }, { value: 'REAR', label: 'Rear' }
      ], default: 'FRONT' },
    ]
  },
  {
    id: 'rims_tires_final',
    label: 'Custom Rims & Tire Replacements',
    desc: 'Opens the Rim & Tire Swap tool',
    icon: '🛞',
    isFinal: true,
    fields: []
  },
];

// ─── State ───
let phase = 'checklist'; // checklist | fillin | output
let checked = new Set();
let fillOrder = [];
let fillIdx = 0;
const values = {}; // { featureId: { fieldId: val } }
const repeats = {}; // { featureId: [ { fieldId: val }, ... ] }

FEATURES.forEach(f => {
  values[f.id] = {};
  repeats[f.id] = [];
  f.fields.forEach(fd => { values[f.id][fd.id] = fd.default || ''; });
});

// ─── Init ───
function init() {
  renderChecklist();
  document.getElementById('btn-prev').addEventListener('click', goPrev);
  document.getElementById('btn-next').addEventListener('click', goNext);
  document.getElementById('btn-copy').addEventListener('click', copyOutput);
  document.getElementById('btn-download').addEventListener('click', downloadOutput);
  document.getElementById('btn-back').addEventListener('click', backToWizard);
}

// ─── Phase 1: Checklist ───
function renderChecklist() {
  phase = 'checklist';
  const wizard = document.getElementById('wizard');
  let html = `<div class="step-header"><h2>What do you need?</h2><p class="step-desc">Check everything you want in your ext_config</p></div>`;
  html += '<div class="checklist-grid">';
  FEATURES.forEach(f => {
    const isChecked = checked.has(f.id);
    html += `<label class="check-card ${isChecked ? 'checked' : ''}" data-id="${f.id}" onclick="toggleCheck('${f.id}', this)">`;
    html += `<div class="check-box">${isChecked ? '✓' : ''}</div>`;
    html += `<div class="check-icon">${f.icon}</div>`;
    html += `<div class="check-info">`;
    html += `<div class="check-label">${f.label}</div>`;
    html += `<div class="check-desc">${f.desc}</div>`;
    html += `</div></label>`;
  });
  html += '</div>';
  wizard.innerHTML = html;
  updateNav();
}

window.toggleCheck = function(id, el) {
  if (checked.has(id)) {
    checked.delete(id);
    el.classList.remove('checked');
    el.querySelector('.check-box').textContent = '';
  } else {
    checked.add(id);
    el.classList.add('checked');
    el.querySelector('.check-box').textContent = '✓';
  }
  updateNav();
};

// ─── Phase 2: Fill-in ───
function startFillIn() {
  fillOrder = FEATURES.filter(f => checked.has(f.id) && f.fields.length > 0);
  fillIdx = 0;
  if (fillOrder.length === 0) {
    generateOutput();
    return;
  }
  phase = 'fillin';
  renderFillStep();
}

function renderFillStep() {
  const feat = fillOrder[fillIdx];
  const wizard = document.getElementById('wizard');
  let html = `<div class="step-header">`;
  html += `<h2>${feat.icon} ${feat.label}</h2>`;
  html += `<p class="step-desc">${feat.desc}</p>`;
  html += `</div>`;
  html += `<div class="fill-card">`;
  html += renderFields(feat.fields, feat.id, 0);
  if (feat.repeater) {
    html += `<div id="repeater-${feat.id}"></div>`;
    html += `<button class="repeater-add" onclick="addRepeat('${feat.id}')">+ Add Another</button>`;
  }
  html += `</div>`;
  wizard.innerHTML = html;
  updateNav();
}

function renderFields(fields, featureId, repeatIdx) {
  let html = '';
  const prefix = repeatIdx > 0 ? `r${repeatIdx}_` : '';
  fields.forEach(f => {
    const fid = prefix + f.id;
    const val = repeatIdx > 0
      ? (repeats[featureId][repeatIdx-1]?.[f.id] || f.default || '')
      : (values[featureId][f.id] || '');
    html += `<div class="field-group">`;
    html += `<label>${f.label}</label>`;
    if (f.hint) html += `<div class="hint">${f.hint}</div>`;
    if (f.type === 'choice') {
      html += `<div class="choice-group">`;
      f.choices.forEach(c => {
        const chk = c.value === val ? 'checked' : '';
        html += `<label class="choice-pill"><input type="radio" name="${featureId}_${fid}" value="${c.value}" ${chk} onchange="updateVal('${featureId}','${f.id}',this.value,${repeatIdx})">${c.label}</label>`;
      });
      html += `</div>`;
    } else {
      html += `<div class="field-row">`;
      const t = f.type === 'number' ? 'number' : 'text';
      const s = f.step ? `step="${f.step}"` : '';
      html += `<input type="${t}" ${s} id="input-${featureId}-${fid}" value="${val}" placeholder="${f.label}" oninput="updateVal('${featureId}','${f.id}',this.value,${repeatIdx})">`;
      if (f.paste) {
        html += `<button class="btn-paste" onclick="pasteInto('${featureId}','${fid}',${repeatIdx})">📋 Paste</button>`;
      }
      html += `</div>`;
    }
    html += `</div>`;
  });
  return html;
}

window.updateVal = function(featId, fid, val, repeatIdx) {
  if (repeatIdx > 0) {
    if (!repeats[featId][repeatIdx-1]) repeats[featId][repeatIdx-1] = {};
    repeats[featId][repeatIdx-1][fid] = val;
  } else {
    values[featId][fid] = val;
  }
};

window.pasteInto = async function(featId, fid, repeatIdx) {
  try {
    const text = await navigator.clipboard.readText();
    const input = document.getElementById(`input-${featId}-${fid}`);
    if (input) {
      input.value = text.trim();
      updateVal(featId, fid.replace(/^r\d+_/, ''), text.trim(), repeatIdx);
      input.style.borderColor = 'var(--success)';
      setTimeout(() => input.style.borderColor = '', 800);
    }
  } catch (e) {
    alert('Clipboard access denied. Please paste manually (Ctrl+V).');
  }
};

window.addRepeat = function(featId) {
  const feat = FEATURES.find(f => f.id === featId);
  if (!feat) return;
  const idx = repeats[featId].length + 1;
  repeats[featId].push({});
  feat.fields.forEach(f => { repeats[featId][idx-1][f.id] = f.default || ''; });
  const container = document.getElementById(`repeater-${featId}`);
  const entry = document.createElement('div');
  entry.className = 'repeat-entry';
  entry.innerHTML = `<strong>#${idx + 1}</strong>` + renderFields(feat.fields, featId, idx);
  container.appendChild(entry);
};

// ─── Navigation ───
function updateNav() {
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const progress = document.getElementById('step-progress');
  const indicator = document.getElementById('step-indicator');

  if (phase === 'checklist') {
    prevBtn.disabled = true;
    const ct = checked.size;
    nextBtn.innerHTML = ct > 0
      ? `Continue (${ct} selected) <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`
      : `Skip — Use Defaults Only <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`;
    nextBtn.className = ct > 0 ? 'btn-glow cyan' : 'btn-glow ghost';
    nextBtn.disabled = false;
    indicator.textContent = `${ct} of ${FEATURES.length} selected`;
    progress.style.setProperty('--progress', '0%');
  } else if (phase === 'fillin') {
    prevBtn.disabled = false;
    const isLast = fillIdx === fillOrder.length - 1;
    if (isLast) {
      nextBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> Generate`;
      nextBtn.className = 'btn-glow gold';
    } else {
      nextBtn.innerHTML = `Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`;
      nextBtn.className = 'btn-glow cyan';
    }
    nextBtn.disabled = false;
    indicator.textContent = `${fillIdx + 1} of ${fillOrder.length}`;
    const pct = ((fillIdx + 1) / fillOrder.length) * 100;
    progress.style.setProperty('--progress', pct + '%');
  }
}

function goNext() {
  if (phase === 'checklist') {
      startFillIn();
  } else if (phase === 'fillin') {
    if (fillIdx < fillOrder.length - 1) {
      fillIdx++;
      renderFillStep();
    } else {
      generateOutput();
    }
  }
}

function goPrev() {
  if (phase === 'fillin') {
    if (fillIdx > 0) {
      fillIdx--;
      renderFillStep();
    } else {
      renderChecklist();
    }
  }
}

// ─── Output ───
function generateOutput() {
  phase = 'output';
  const lines = [];
  const L = (t = '') => lines.push(t);
  const SEP = ';===================================================================================================================';
  const has = id => checked.has(id);
  const v = id => values[id];

  L('; Done By Pod\'s Mods of RealiSimHQ');
  L(';');
  L('; Add to Top of Ext_Config.ini');
  L(';');
  L('; [INCLUDE: RealiSimHQ.ini]');
  L(';');
  L('[INCLUDE: common/selflighting.ini]');
  L('[INCLUDE: common/custom_emissive.ini]');
  L('[INCLUDE: common/no_popup_lights.ini]');
  L('[INCLUDE: common/materials_glass.ini]');
  L('[INCLUDE: android_auto/config.ini]');
  L('[INCLUDE: common/navigators.ini]');
  L('[INCLUDE: common/rain_tyres.ini]');
  L('[INCLUDE: common/materials_interior.ini]');
  L('[INCLUDE: common/rain_tyres.ini]');
  L();

  if (has('audio_pitch')) {
    L(SEP); L('; ~ Audio ~'); L(SEP);
    L('[AUDIO_PITCH]');
    L(`ENGINE_EXT=${v('audio_pitch').engine_ext_pitch}`);
    L(`ENGINE_INT=${v('audio_pitch').engine_int_pitch}`);
    L(`SKID_EXT = ${v('audio_pitch').skid_ext_pitch}`);
    L(`SKID_INT = ${v('audio_pitch').skid_int_pitch}`);
    L();
  }

  if (has('audio_volume')) {
    if (!has('audio_pitch')) { L(SEP); L('; ~ Audio ~'); L(SEP); }
    L('[AUDIO_VOLUME]');
    ['ENGINE_EXT:vol_engine_ext','ENGINE_INT:vol_engine_int','GEAR_EXT:vol_gear_ext','GEAR_INT:vol_gear_int',
     'BODYWORK:vol_bodywork','WIND:vol_wind','DIRT:vol_dirt','DOWN_SHIFT:vol_down_shift','HORN:vol_horn',
     'GEAR_GRIND:vol_gear_grind','BACKFIRE_EXT:vol_backfire_ext','BACKFIRE_INT:vol_backfire_int',
     'TRANSMISSION:vol_transmission','LIMITER:vol_limiter','TURBO:vol_turbo',
     'SKID_EXT:vol_skid_ext','SKID_INT:vol_skid_int'].forEach(p => {
      const [k, id] = p.split(':');
      L(`${k} = ${v('audio_volume')[id]}`);
    });
    L();
  }

  if (has('ext_glass')) {
    L(SEP); L('; Exterior Glass'); L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${v('ext_glass').ext_glass_mat}`);
    L('PROP_... = extColoredReflection, 0.9');
    L('PROP_... = extColoredReflectionNorm, 0.8');
    L('PROP_... = extColoredBaseReflection, 0');
    L('PROP_... = fresnelEXP, 5');
    L('PROP_... = fresnelMaxLevel, 1');
    L('PROP_... = fresnelC, 0.6');
    L('PROP_... = ksAmbient, 0.1');
    L('PROP_... = ksDiffuse, 0.1');
    L('PROP_... = isAdditive, 0');
    L('PROP_... = ksSpecular, 1');
    L('PROP_... = ksSpecularEXP, 200');
    L('PROP_... = sunSpecular, 0.5');
    L('PROP_... = sunSpecularEXP, 20');
    L('PROP_... = extExtraSharpLocalReflections, -1');
    L('PROP_... = extNormalizeAO, 1');
    L('RESOURCE_0 = txDiffuse');
    L('RESOURCE_FILE_0 = /../../parts/textures/glass.dds');
    L('RESOURCE_1 = txNormal');
    L('RESOURCE_FILE_1 = /../../parts/textures/Damage/DAMAGE_GLASS.dds');
    L();
  }

  if (has('int_glass')) {
    L(SEP); L('; Interior Glass'); L(SEP);
    L('[SHADER_REPLACEMENT_100]');
    L(`MATERIALS = ${v('int_glass').int_glass_mat}`);
    L('SHADER = ksWindscreen');
    L();
  }

  if (has('shaking_exhaust')) {
    L(SEP); L('; SHAKING EXHAUST'); L(SEP);
    const all = [v('shaking_exhaust'), ...repeats.shaking_exhaust];
    all.forEach(ex => {
      L('[SHAKING_EXHAUST_...]');
      L(`MESHES = ${ex.exhaust_mesh || ''}`);
      L(`POINT_0 = ${ex.exhaust_point || '1, 2, 3'}`);
      L(`POINT_0_RADIUS = ${ex.exhaust_radius || '1'}`);
      L(`POINT_0_EXP = ${ex.exhaust_exp || '1'}`);
      L(`POINT_0_SCALE = ${ex.exhaust_scale || '0.35, 0.35, 0.3'}`);
      L();
    });
  }

  if (has('underside_dark')) {
    L(SEP); L('; Wheel Well / Under Carriage Shadows'); L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${v('underside_dark').underside_mats}`);
    L('PROP_... = ksAmbient, 0.01');
    L('PROP_... = ksDiffuse, 0.01');
    L('DOUBLE_FACE_SHADOW_BIASED = 1');
    L();
  }

  if (has('smoke_collider')) {
    L(SEP); L('; Smoke Collider'); L(SEP);
    L('[COLLIDER_0]');
    L(`MESHES= ${v('smoke_collider').collider_mesh}`);
    L('POSITION_OFFSET=0,0,0');
    L('RADIUS=0.1');
    L();
  }

  if (has('carpaint_mat')) {
    L(SEP); L('; Carpaint'); L(SEP);
    L('[INCLUDE: common/materials_carpaint.ini]');
    L(`CarPaintMaterial = ${v('carpaint_mat').carpaint_material}`);
    L('CarPaintVersionAware = 4');
    L('DisableDev = 1');
    L('COLLIDER_1_SPARKS_AS=TITANIUM, SKIDPAD');
    L();
  }

  if (has('damage_tex')) {
    const dir = v('damage_tex').damage_ao_dir || 'V';
    L(SEP); L('; Car Damage Textures'); L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${v('damage_tex').damage_materials}`);
    L('SHADER = ksPerPixelMultiMap_damage_dirt');
    'ksAmbient,0.45|ksDiffuse,0.5|ksSpecular,0.6|ksSpecularEXP,120|KsAlphaRef,1|fresnelC,0.07|fresnelEXP,3.5|fresnelMaxLevel,0.6|nmObjectSpace,0|isAdditive,2|useDetail,1|detailUVMultiplier,40|shadowBiasMult,0|damageZones,0,0,0,0|dirt,0.00|sunSpecular,12|sunSpecularEXP,2000|extNormalizeAO,1'.split('|').forEach(p => {
      const [k, ...vv] = p.split(',');
      L(`PROP_... = ${k}, ${vv.join(',')}`);
    });
    L('RESOURCE_0 = txDiffuse'); L('RESOURCE_FILE_0 = carpaint.dds');
    L('RESOURCE_1 = txNormal'); L('RESOURCE_FILE_1 = carpaint_nm.dds');
    L('RESOURCE_2 = txMaps'); L('RESOURCE_FILE_2 = carpaint_maps.dds');
    L('RESOURCE_3 = txDetail'); L('RESOURCE_FILE_3 = metal_detail.dds');
    L('RESOURCE_4 = txDamage'); L(`RESOURCE_FILE_4 = /../../parts/textures/Damage/carpaint_Damage_${dir}.dds`);
    L('RESOURCE_5 = txDust'); L(`RESOURCE_FILE_5 = /../../parts/textures/Damage/carpaint_Dust_${dir}.dds`);
    L('RESOURCE_6 = txDamageMask'); L(`RESOURCE_FILE_6 = /../../parts/textures/Damage/carpaint_Damage_Maps_${dir}.dds`);
    L();
  }

  if (has('deforming_hood')) {
    L(SEP); L('; DEFORMING HOOD'); L(SEP);
    L('[DEFORMING_HOOD]');
    L(`NAME=${v('deforming_hood').hood_name || ''}`);
    L('OFFSET_Y_MIDDLE=0.03'); L('OFFSET_Y_END=-0.06'); L('OFFSET_Z_END=0.02');
    L('BULGING_EXTRA=0.05'); L('BULGING_EXPONENT=2.0');
    L('NOISE_Y_AMPLITUDE=-0.4'); L('NOISE_Z_AMPLITUDE=0.4');
    L('NOISE_Y_FREQENCY=-4.0'); L('NOISE_Z_FREQENCY=4.0');
    L('Z_FACTOR=2.5');
    L();
  }

  if (has('gold_rims')) {
    L(SEP); L('; Gold Rims'); L(SEP);
    L('[Material_Aluminium_v2]');
    L(`Materials= ${v('gold_rims').gold_rim_mats}`);
    L('Metalness=0.5'); L('Reflectance=0.15'); L('BrightnessAdjustment=0.35');
    L('DetailTexture=1'); L('DetailNormalTexture = common/pbr_metal.dds');
    L('DetailNormalPBRSecondaryColor = 0.5, 0.45, 0.1, 0.3');
    L('DetailScale=1'); L('DetailNormalBlend=1'); L('DetailNormalPBRSmoothnessGamma=0.8');
    L();
  }

  if (has('silver_rims')) {
    L(SEP); L('; Silver Rims'); L(SEP);
    L('[Material_Aluminium_v2]');
    L(`Materials= ${v('silver_rims').silver_rim_mats}`);
    L('Metalness=0.5'); L('Reflectance=0.15'); L('BrightnessAdjustment=0.35');
    L('DetailTexture=1'); L('DetailNormalTexture = common/pbr_metal.dds');
    L('DetailNormalPBRSecondaryColor = 0.5, 0.5, 0.5, 0.5');
    L('DetailScale=1'); L('DetailNormalBlend=1'); L('DetailNormalPBRSmoothnessGamma=0.8');
    L();
  }

  if (has('painted_tex')) {
    L(SEP); L('; Painted Texture'); L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${v('painted_tex').painted_tex_mats}`);
    'ksAmbient,0.45|ksDiffuse,0.5|ksSpecular,0.6|ksSpecularEXP,60|KsAlphaRef,0|fresnelC,0.07|fresnelEXP,3.5|fresnelMaxLevel,0.5|isAdditive,2|useDetail,1|detailUVMultiplier,120|shadowBiasMult,30|damageZones,0|dirt,0|sunSpecular,90|sunSpecularEXP,6500'.split('|').forEach(p => {
      const [k, ...vv] = p.split(',');
      L(`PROP_... = ${k}, ${vv.join(',')}`);
    });
    L('DOUBLE_FACE_SHADOW_BIASED = 1');
    L();
  }

  if (has('ext_chrome')) {
    L(SEP); L('; Exterior Chrome'); L(SEP);
    L('[Material_Metal_v2]');
    L(`Materials= ${v('ext_chrome').chrome_mats}`);
    L('BrightnessAdjustment = 0.4'); L('DetailScale = 1');
    L('Metalness = 0.5'); L('Reflectance = 0.5'); L('LocalReflectionsSharpness = 0.1');
    L();
  }

  if (has('underglow_lights')) {
    const ug = v('underglow_lights');
    const blink = ug.ug_blinking === '1';
    L(SEP); L('; Underglow Lights'); L(SEP);
    [{n:'1',f:'-0.7, 0.20, -1.8',t:'0.7, 0.20, -1.8',c:'0.7'},
     {n:'2',f:'0.8, 0.20, 0.8',t:'0.8, 0.20, -0.8',c:'0.8'},
     {n:'3',f:'-0.8, 0.20, 0.8',t:'-0.8, 0.20, -0.8',c:'0.8'},
     {n:'4',f:'-0.7, 0.20, 2.0',t:'0.7, 0.20, 2.0',c:'0.8'}].forEach(s => {
      L(`[LIGHT_EXTRA_${s.n}]`);
      L(`LINE_FROM=${s.f}`); L(`LINE_TO=${s.t}`);
      L('BIND_TO_HEADLIGHTS=1');
      L(`COLOR_FROM=${ug.ug_color_from}`); L(`COLOR_TO=${ug.ug_color_to}`);
      L(`DIFFUSE_CONCENTRATION=${s.c}`);
      L('FADE_AT=150'); L('FADE_SMOOTH=8');
      L(`RANGE=${ug.ug_range}`); L('RANGE_GRADIENT_OFFSET=0.1');
      L(`SPOT=${ug.ug_spot}`); L('SPOT_SHARPNESS=0.5');
      L('SPECULAR_MULT=0'); L('DIRECTION=0,-1,0');
      L('SELF_LIGHTNING=1'); L('EXTERIOR_ONLY=0'); L('INTERIOR_ONLY=0'); L('SIMULATE_HEATING=0');
      if (blink) { L('BLINKING_PATTERN=(0=1|1=0|2=1|3=0|4=1|5=0|6=1|7=0)'); L('BLINKING_DURATION=8'); }
      L();
    });
  }

  if (has('emissive_extra')) {
    const em = v('emissive_extra');
    L(SEP); L('; Hidden Parts'); L(SEP);
    L('[EMISSIVE_EXTRA_F_...]');
    L(`NAME = ${em.emissive_name}`);
    L(`COLOR = ${em.emissive_color}`);
    L('OFF_COLOR = 0, 0, 0'); L('LAG = 0.'); L('SIMULATE_HEATING = 0.');
    L(`LOCATION = ${em.emissive_location || 'FRONT'}`);
    L('ACT_AS_HEADLIGHTS = 0'); L('TOGGLE_VISIBILITY = 1'); L('TOGGLE_VISIBILITY_INVERSE = 0');
    L();
  }

  L('[INCLUDE: common/materials_interior.ini]');
  L('[INCLUDE: common/custom_rims.ini]');
  L();

  // ═══ STATIC DEFAULTS ═══
  L(SEP);
  L(';---------------------------------------------Rarely Changed--------------------------------------------------------');
  L(SEP);
  L();

  // Tyres
  L(SEP); L('; Tyres'); L(SEP);
  L('[SHADER_REPLACEMENT_...]');
  L('MATERIALS = 21 - Default, Tyre.001, TIRE, Tyre_Stock, Tyre_Pro, Tyre_Thicc, Tyre, Tyres, TYRE, TIRE, TYRES');
  'ksAmbient,0.25|ksDiffuse,0.12|ksSpecular,0.002|ksSpecularEXP,350|KsAlphaRef,0|blurLevel,0|dirtyLevel,0.02|fresnelC,0.000|fresnelEXP,5|fresnelMaxLevel,0.000|isAdditive,0'.split('|').forEach(p => {
    const [k,...vv] = p.split(','); L(`PROP_... = ${k}, ${vv.join(',')}`);
  });
  L('DOUBLE_FACE_SHADOW_BIASED = 1');
  L();

  // Driver
  L(SEP); L('; Driver'); L(SEP);
  L('[SHADER_REPLACEMENT_...]'); L('MESHES = DRIVER:suit'); L('MATERIALS = RT_DriverSuit');
  L('SHADER = ksSkinnedMesh_NMDetaill');
  L('RESOURCE_0 = txDiffuse'); L('RESOURCE_FILE_0 =/../../parts/Driver/2016_Suit_DIFF.dds');
  L('RESOURCE_1 = txNormal'); L('RESOURCE_FILE_1 =/../../parts/Driver/2016_Suit_NM.dds'); L();
  L('[SHADER_REPLACEMENT_...]'); L('MESHES = DRIVER:Gloves'); L('MATERIALS = RT_Gloves');
  L('SHADER = ksSkinnedMesh_NMDetaill');
  L('RESOURCE_0 = txDiffuse'); L('RESOURCE_FILE_0 =/../../parts/Driver/2016_Gloves_DIFF.dds');
  L('RESOURCE_1 = txNormal'); L('RESOURCE_FILE_1 =/../../parts/Driver/2016_Gloves_nm.dds'); L();
  L('[SHADER_REPLACEMENT_...]'); L('MATERIALS = RT_HELMET_Glass'); L('SHADER = ksPerPixelMultiMap');
  L('RESOURCE_0 = txDiffuse'); L('RESOURCE_FILE_0 =/../../parts/Driver/Helmet_2012_Glass.dds');
  L('RESOURCE_1 = txNormal'); L('RESOURCE_FILE_1 =/../../parts/Driver/flat_nm.dds');
  L('RESOURCE_2 = txMaps'); L('RESOURCE_FILE_2 =/../../parts/Driver/HELMET_2012_map.dds');
  L('RESOURCE_3 = txDetail'); L('RESOURCE_FILE_3 =null.dds'); L();
  L('[SHADER_REPLACEMENT_...]'); L('MESHES = DRIVER:HELMET_SUB0'); L('MATERIALS = RT_Helemt');
  L('SHADER = ksPerPixelMultiMap');
  L('RESOURCE_0 = txDiffuse'); L('RESOURCE_FILE_0 =/../../parts/Driver/HELMET_2012.dds');
  L('RESOURCE_1 = txNormal'); L('RESOURCE_FILE_1 =/../../flat_nm.dds'); L();

  // Steering Wheel
  L(SEP); L('; Steering Wheel'); L(SEP);
  L('[MODEL_REPLACEMENT_...]'); L('FILE = car.kn5');
  L('INSERT = /../../parts/Steering Wheels/vertex_wheel.kn5');
  L('INSERT_AFTER = COCKPIT_HR'); L('HIDE =');
  L('SCALE = 1.0, 1.0, 1.0'); L('ROTATION = 0.0, 0.0, 0.0'); L('OFFSET = 0, 0, 0'); L();

  // TyresFX
  L(SEP); L('; TyresFX Custom Textures'); L(SEP);
  L('[SHADER_REPLACEMENT_...]');
  L('MATERIALS = 21 - Default, Tyre.001, Tyre_Stock, Tyre_Pro, Tyre_Thicc');
  L('SHADER = ksTyresFX'); L();
  for (let i=0;i<=2;i++) {
    L(`[TYRES_FX_CUSTOMTEXTURE_${i}]`);
    L('TXDIFFUSE = /../../parts/tyre/Federal_595RS_white_letter/tyre1.dds');
    L('TXBLUR = /../../parts/tyre/Federal_595RS_white_letter/tyre1.dds');
    L('TXNORMAL = /../../parts/tyre/Federal_595RS_white_letter/tyre1_NM.dds');
    L('TXNORMALBLUR = /../../parts/tyre/Federal_595RS_white_letter/tyre1_NM.dds'); L();
  }
  for (let i=3;i<=5;i++) {
    L(`[TYRES_FX_CUSTOMTEXTURE_${i}]`);
    L('TXDIFFUSE = /../../parts/tyre/KendaKR20A/tyre.dds'); L('TXBLUR = /../../parts/tyre/KendaKR20A/tyre.dds');
    L('TXNORMAL = /../../parts/tyre/KendaKR20A/tyre_nm.dds'); L('TXNORMALBLUR = /../../parts/tyre/KendaKR20A/tyre_nm.dds'); L();
  }
  L('[TYRES_FX_CUSTOMTEXTURE_6]');
  L('TXDIFFUSE = /../../parts/tyre/Armstrong_BluTracHP/tyre.dds'); L('TXBLUR = /../../parts/tyre/Armstrong_BluTracHP/tyre.dds');
  L('TXDIRT = /../../parts/tyre/Armstrong_BluTracHP/tyre_dirt.dds');
  L('TXNORMAL = /../../parts/tyre/Armstrong_BluTracHP/tyre_nm.dds'); L('TXNORMALBLUR = /../../parts/tyre/Armstrong_BluTracHP/tyre_nm.dds'); L();
  L('[TYRES_FX_CUSTOMTEXTURE_7]');
  L('TXDIFFUSE = /../../parts/tyre/accelera_651/tyre.dds'); L('TXBLUR = /../../parts/tyre/accelera_651/tyre_blur.dds');
  L('TXDIRT = /../../parts/tyre/accelera_651/dirt.dds');
  L('TXNORMAL = /../../parts/tyre/accelera_651/tyre_nm.dds'); L('TXNORMALBLUR = /../../parts/tyre/accelera_651/tyre_blur_nm.dds'); L();

  // Brake FX
  L(SEP); L('; Brake FX'); L(SEP);
  L('[Material_CarPaint_Metallic]'); L('Materials = EXT_CaliperHatPaint');
  L('NormalsMode = BASIC'); L('ClearCoatThickness = 0.1'); L('SpecularColor = 1');
  L('SpecularMult = 1.25'); L('FresnelMax = 0.5'); L('FresnelC = 0.14'); L('BrightnessAdjustment = 0.55'); L();
  L('[Material_Aluminium_v2]'); L('Materials= EXT_CaliperHardware');
  L('Metalness = 0.9'); L('Reflectance = 0'); L('Smoothness = 0'); L('BrightnessAdjustment = 0.38');
  L('DetailTexture = 1'); L('DetailNormalTexture = common/pbr_metal.dds');
  L('DetailNormalPBRSecondaryColor = 0, 0, 0, 0'); L('DetailScale = 0');
  L('DetailNormalBlend = 1'); L('DetailNormalPBRSmoothnessGamma = 1'); L('OcclusionSource = MAPS_ALPHA'); L();
  L('[BRAKEDISC_FX]'); L('ACTIVE = 1'); L('CERAMIC = 1'); L('CARVED = 0'); L('CARVED_FREQUENCY = 20');
  L('GLOW_OFFSET = 1.5'); L('DEBUG = 0'); L('DISC_INTERNAL_RADIUS = 0.1');
  L('DISC_RADIUS = 0.16383'); L('WEAR_FORCE = 0.45'); L('GLOW_FORCE = 0'); L();

  // Exhaust Flames
  L(SEP); L('; Exhaust Flames'); L(SEP);
  L('[EXHAUST_FLAMES]');
  L('ANTILAG=1'); L('ANTILAG_DELAY=0.0'); L('ANTILAG_INTENSITY=1'); L('ANTILAG_TURBO_THRESHOLD=0');
  L('DAMAGE=1'); L('DAMAGE_DURATION=1.00'); L('DAMAGE_INTENSITY=1'); L('DAMAGE_PROBABILITY=1');
  L('DISCHARGE=1'); L('DISCHARGE_CHARGE_TIME=0.1'); L('DISCHARGE_DELAY=0');
  L('DISCHARGE_DURATION=0.250'); L('DISCHARGE_PROBABILITY=0.25'); L('DISCHARGE_INTENSITY=0.5');
  L('DISCHARGE_WATER_TEMPERATURE_THRESHOLD=70');
  L('FLAT_SHIFT=1'); L('FLAT_SHIFT_COOLDOWN=0'); L('FLAT_SHIFT_DURATION=0.25');
  L('FLAT_SHIFT_GAS_THRESHOLD=75'); L('FLAT_SHIFT_INTENSITY=0.65'); L('FLAT_SHIFT_PROBABILITY=1');
  L('LIMITER=1'); L('LIMITER_DELAY=0'); L('LIMITER_INTENSITY=0.15'); L();
  L('[LIGHT_FLAMES]'); L('CAR_BRIGHTNESS_MULT=0,9'); L('OFFSET_DIR=0,15'); L('OFFSET_POS=0,25'); L('SPOT=300'); L();

  // Particles FX
  L(SEP); L('; Particles FX'); L(SEP);
  L('[PARTICLES_FX]');
  L('BRAKES_SMOKE=1'); L('ENGINE_SMOKE=1'); L('EXHAUST_SMOKE=1'); L('DRAG_MULT=2'); L('LIFT_MULT=0.1');
  L('BODY_SMOKE_AMOUNT=0'); L("BODY_SMOKE_COLOR='0, 0, 0, 0'"); L('BODY_SMOKE_COLOR_CONSISTENCY=0');
  L('BODY_SMOKE_GROW_MULTIPLIER=1'); L('BODY_SMOKE_INTENSITY=1'); L('BODY_SMOKE_LIFETIME=1');
  L('BODY_SMOKE_SIZE_MULTIPLIER=1'); L('BODY_SMOKE_SPREAD_MULTIPLIER=1');
  L('BODY_SMOKE_TARGET_Y_VELOCITY=-0.3'); L('BODY_SMOKE_THICKNESS=0');
  L('BODY_SPARKS_AMOUNT=0.25'); L("BODY_SPARKS_COLOR='1, 0.5, 0, 10'");
  L('BODY_SPARKS_INTENSITY=0.2'); L('BODY_SPARKS_LIFETIME=0.4');
  L('COLLIDER_0_SMOKE_AMOUNT=0'); L("COLLIDER_0_SMOKE_COLOR='0, 0, 0, 0'");
  L('COLLIDER_0_SMOKE_COLOR_CONSISTENCY=0'); L('COLLIDER_0_SMOKE_GROW_MULTIPLIER=1');
  L('COLLIDER_0_SMOKE_INTENSITY=1'); L('COLLIDER_0_SMOKE_LIFETIME=1');
  L('COLLIDER_0_SMOKE_SIZE_MULTIPLIER=1'); L('COLLIDER_0_SMOKE_SPREAD_MULTIPLIER=1');
  L('COLLIDER_0_SMOKE_TARGET_Y_VELOCITY=-0.3'); L('COLLIDER_0_SMOKE_THICKNESS=0');
  L('COLLIDER_0_SPARKS_AMOUNT=0.25'); L("COLLIDER_0_SPARKS_COLOR='1, 0.5, 0, 10'");
  L('COLLIDER_0_SPARKS_INTENSITY=0.2'); L('COLLIDER_0_SPARKS_LIFETIME=0.4');
  L("SMOKE_BS_OFFSET_FRONT='0, 0, 0'"); L("SMOKE_BS_OFFSET_MIDDLE='0, 0, 0'"); L("SMOKE_BS_OFFSET_REAR='0, 0, 0'");
  L('SMOKE_BS_RADIUS_FRONT=1.05'); L('SMOKE_BS_RADIUS_MIDDLE=1.05'); L('SMOKE_BS_RADIUS_REAR=1.05');
  L("SMOKE_COLLIDER_OFFSET='0, 0'"); L('SMOKE_COLLIDER_RADIUS=2');
  L('SMOKE_FLAMES_POWER_APPEARING=60'); L('SMOKE_FLAMES_POWER_MAIN=30');
  L('SMOKE_FLAMES_RADIUS_APPEARING=10'); L('SMOKE_FLAMES_RADIUS_MAIN=1');
  L('SMOKE_PUSHAWAY_STRENGTH=12'); L('SPARKS_AMOUNT_MULT=2');
  L('SPARKS_COOLDOWN_LAG=0.96'); L('SPARKS_DEPTH_EXP=4'); L('SPARKS_MAX_DEPTH=0.0025');
  L('SPARKS_OVERLOAD_LAG=0.7');
  L("TRACES_LIGHTS_POS='0.658934, 0.739916, -2.08433'"); L('TRACES_LIGHTS_SIZE=-1');
  L('SMOKE_BLOCK_START = 0.4'); L('SMOKE_BLOCK_END = 0.6');
  L('SMOKE_COLOR = 43, 100, 130'); L('SMOKE_FORCE_THICKNESS = 0.0'); L();

  // TyresFX Flex
  L(SEP); L('; TyresFX Flex'); L(SEP);
  L('[TYRES_FX_FRONT]'); L('ENABLED=1'); L('FLEX_MAX_SKEW_MULT=1.1'); L('FLEX_MULT=1');
  L('FLEX_PROFILE_MULT=0.45'); L('FLEX_SKEW_RANGE_MULT=3'); L('FLEX_SKEW_SMOOTHING=0.1');
  L('FLEX_SQUASH_SMOOTHING=1.1'); L('NOFX_DISTANCE_SWITCH=40'); L('VISIBLE_IN_INTERIOR_CAM=1'); L();
  L('[TYRES_FX_REAR]'); L('ENABLED=1'); L('FLEX_MAX_SKEW_MULT=1.1'); L('FLEX_MULT=1');
  L('FLEX_PROFILE_MULT=1.25'); L('FLEX_SKEW_RANGE_MULT=3'); L('FLEX_SKEW_SMOOTHING=0.1');
  L('FLEX_SQUASH_SMOOTHING=0.1'); L('NOFX_DISTANCE_SWITCH=40'); L('VISIBLE_IN_INTERIOR_CAM=1'); L();

  // Driver 3D
  L('[DRIVER3D_MODEL]'); L('NAME=/../../parts/Driver/Bare_Hands.kn5'); L('POSITION=0.0,0.0,0.0'); L();

  // Physics & FFB
  L(SEP); L('; Physics & FFB'); L(SEP);
  L('[BASIC]'); L('BRAKES_THRESHOLD = 0.01'); L('LIGHT_DAMAGE_SPEED_MIN = 40');
  L('LIGHT_DAMAGE_SPEED_MAX = 120'); L('IS_LOW_BEAM_AVAILABLE = 1'); L('HEADLIGHTS_ARE_HEADLIGHTS = 1');
  L('STOP_LODS_ADJUSTMENT = 0'); L('IGNORE_OTHER_CONFIGS = 0'); L('BOUNDING_SPHERE_RADIUS=3');
  L('ENGINE_STALLED_RPM_THRESHOLD=750'); L('TURNING_LIGHTS_REPEAT=1'); L();
  L('[BOUNCED_INTERIOR_LIGHT]'); L('ACTIVE=1'); L('DIRECTION=0, 1, -2');
  L('MULT=1, 1, 1, 0.5'); L('OFFSET=0, -1, 3'); L('RANGE=3.2');
  L('RANGE_GRADIENT_OFFSET=0.9'); L('SPOT=20'); L('SPOT_SHARPNESS=0.9'); L();
  L('[INCLUDE: common/ffbtweaks.ini]'); L('[INCLUDE: common/general.ini]'); L();
  L('[GYRO2]'); L('ENABLED=1'); L();
  L('[POSTPROCESSING]'); L('CLEAN_FFB=1'); L();
  L('[POSTPROCESSING_SCRIPT_SETTINGS]');
  L('__PLUGIN_SETTINGS=POSTPROCESSING_SCRIPT/IMPLEMENTATION, extension/state/lua/soft_lock/{0}__settings.ini'); L();
  L('[CUSTOM_SOFT_LOCK]'); L('ENABLED=1'); L('PADDING=10'); L('SHIFT_PADDING=0.8');
  L('FORCE_FACTOR=1'); L('SPEED_FACTOR=1'); L('DAMPER=0'); L();
  L('[REAL_FEEL]'); L('ENABLED=0'); L('ENABLE_FOR_ALL=0'); L();
  L('[TWEAKS]'); L('STRUT_FFB_ADJUSTMENT=1'); L('FADE_IN_AFTER_LOADING=1'); L();
  L('[PHYSICS_EXPERIMENTS]');
  'EXTENDED_PHYSICS=1|STALLING=0|ENABLE_MESH_COLLIDER_SOONER=1|CLAMP_MESH_COLLIDERS=1|EXTEND_COLLIDER_BOXES=1|EXTRAPOLATE_STATE=1|DISABLE_AUTOBRAKING=0|AWAKE_IN_PITS=1|PHYSICS_SHADOWS=1|TYRE_SHIFT_SURFACE_PROPERLY=1|TYRE_SINE_ALTERS_NORMALS=1|TYRE_PERLIN_SURFACE_NOISE=1|ALT_COLLISIONS_HANDLING=1|ALT_COLLISIONS_PROCESSING=1|FIX_SPAWN_POINTS=1|PARALLELIZED_CONTACTS=1|ALT_DEPTH_FOR_CAR_BOX_VS_TRACK=1|TOE_ROD_THING=1|DIFF_THING=1'.split('|').forEach(l => L(l));
  L();
  L('[PHYSICS_EXPERIMENTS_DONE]');
  'SLIDING_FIX=1|BRAKES_LIMIT=1|RIM_COLLISION=1|SMOOTH_COLLISIONS=1|ADAPTIVE_HARD_COLLISIONS=1|OPTIMIZE_ROTATION=1|ODE_AFTER_GRAPHICS=1|SMOOTH_CONTROLS_LOCKING=1|RANDOMIZE_WHEEL_ANGLES=1|CUSTOM_POBJECTS_MOTION=1|CUSTOM_THREADPOOL=1|ALTERNATIVE_OPTIMAL_BRAKE=1|REPAIR_WHEELS=1|FIX_GROUND_COLLIDERS=1|FIX_SURFACE_TYPES=1'.split('|').forEach(l => L(l));
  L();
  L('[REFLECTIONS_FX]'); L('ALLOW_INTERIOR_SSAO=0'); L('ALLOW_INTERIOR_SSGI=0'); L('AUTOFIX=1');
  L('MASK_CUBEMAP_ENABLED=1'); L('MASK_CUBEMAP_OFFSET=0, -0.1, 0.2'); L('MASK_CUBEMAP_TWEAK=0.5'); L();
  L('[SMART_MIRROR]'); L('DISALLOW_MAPPING_NORMALIZATION=0'); L('DISALLOW_REAR_MIRROR=0');
  L('DISALLOW_REFLECTION_TILTING=0'); L('SHAKING=1'); L();
  L('[SCRIPT_...]'); L('SCRIPT = nos.lua');
  L('[SCRIPT_...]'); L('SCRIPT = audio.lua');
  L('[SCRIPT_...]'); L('SCRIPT = bending.lua');
  L('[SCRIPT_...]'); L('SCRIPT = collision_sfx.lua'); L();
  L('[EXTRA_SWITCHES]'); L('SWITCH_E_FLAGS = HOLD_MODE'); L();

  // Show modal first, then output
  const output = lines.join('\n');
  document.getElementById('output-code').textContent = output;
  showGenerateModal(output);
}

function showGenerateModal() {
  const wantsRims = checked.has('rims_tires_final');

  const modal = document.createElement('div');
  modal.id = 'generate-modal';
  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeModal()"></div>
    <div class="modal-card">
      <img src="realisimhq-logo.png" alt="RealiSimHQ" class="modal-logo">
      <div class="modal-ring" id="modal-ring">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="modal-bolt">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10"></polygon>
        </svg>
      </div>
      <h3 class="modal-title" id="modal-title">Generating...</h3>
      <p class="modal-sub" id="modal-sub">Building your RealiSimHQ.ini</p>
      <div class="modal-divider"></div>
      <p class="modal-cta">Enjoying the tools? Support the project!</p>
      <div class="modal-links">
        <a href="https://www.patreon.com/c/u80119694" target="_blank" class="modal-btn patreon">❤️ Support on Patreon</a>
        ${wantsRims ? `<a href="https://realisimhq.github.io/Rim-and-Tire-Swap/" target="_blank" class="modal-btn rims">🛞 Rim & Tire Swap Tool</a>` : ''}
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Animate: preparing → done
  setTimeout(() => {
    document.getElementById('modal-ring').classList.add('done');
    document.getElementById('modal-title').textContent = '✅ Ready!';
    document.getElementById('modal-sub').textContent = 'Your config has been generated';
  }, 1500);

  // Auto-close after 5 seconds
  setTimeout(() => {
    closeModal();
  }, 5000);
}

window.closeModal = function() {
  const modal = document.getElementById('generate-modal');
  if (modal) {
    modal.classList.add('modal-fade-out');
    setTimeout(() => {
      modal.remove();
      document.getElementById('wizard').style.display = 'none';
      document.getElementById('wizard-nav').style.display = 'none';
      document.getElementById('output-section').style.display = 'block';
    }, 300);
  }
};

function copyOutput() {
  const text = document.getElementById('output-code').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btn-copy');
    const orig = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    setTimeout(() => btn.innerHTML = orig, 1500);
  });
}

function downloadOutput() {
  const text = document.getElementById('output-code').textContent;
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'RealiSimHQ.ini';
  a.click();
}

function backToWizard() {
  document.getElementById('output-section').style.display = 'none';
  document.getElementById('wizard').style.display = '';
  document.getElementById('wizard-nav').style.display = '';
  renderChecklist();
}

document.addEventListener('DOMContentLoaded', init);
