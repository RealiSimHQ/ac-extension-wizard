// AC Extension Wizard — RealiSimHQ
// Generates a RealiSimHQ.ini for CSP ext_config

const STEPS = [
  // ─── 1. Audio ───
  {
    id: 'audio',
    title: 'Audio Settings',
    desc: 'Engine audio pitch, volume, and turbo properties.',
    sections: [
      {
        id: 'audio_pitch',
        question: 'Do you want custom Audio Pitch?',
        fields: [
          { id: 'engine_ext_pitch', label: 'ENGINE_EXT pitch', default: '1', type: 'number', step: '0.05' },
          { id: 'engine_int_pitch', label: 'ENGINE_INT pitch', default: '1', type: 'number', step: '0.05' },
          { id: 'skid_ext_pitch', label: 'SKID_EXT pitch', default: '0.65', type: 'number', step: '0.05' },
          { id: 'skid_int_pitch', label: 'SKID_INT pitch', default: '0.65', type: 'number', step: '0.05' },
        ]
      },
      {
        id: 'audio_volume',
        question: 'Do you want custom Audio Volume?',
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
    ]
  },
  // ─── 2. Glass ───
  {
    id: 'glass',
    title: 'Glass Shaders',
    desc: 'Exterior and interior glass reflections and shaders.',
    sections: [
      {
        id: 'ext_glass',
        question: 'Do you want Exterior Glass Reflection Updated?',
        fields: [
          { id: 'ext_glass_mat', label: 'Exterior Glass Material(s)', hint: 'CM Showroom — click the glass, copy material name', paste: true },
        ]
      },
      {
        id: 'int_glass',
        question: 'Do you want Interior Windscreen Shader Updated?',
        fields: [
          { id: 'int_glass_mat', label: 'Interior Window Material(s)', hint: 'Click interior window in CM Showroom, copy material name', paste: true },
        ]
      },
    ]
  },
  // ─── 3. Exhaust / Shifter ───
  {
    id: 'exhaust',
    title: 'Shaking Exhaust / Shifter',
    desc: 'Add animated exhaust tips or shifter that shake with RPM.',
    sections: [
      {
        id: 'shaking_exhaust',
        question: 'Do you want Shaking Exhaust/Shifter?',
        repeater: true,
        repeatLabel: '+ Add Another',
        fields: [
          { id: 'exhaust_mesh', label: 'Mesh Name', hint: 'Click exhaust tip or shifter in CM Showroom, copy mesh name', paste: true },
          { id: 'exhaust_point', label: 'POINT_0 (x, y, z)', default: '1, 2, 3' },
          { id: 'exhaust_radius', label: 'POINT_0_RADIUS', default: '1', type: 'number', step: '0.1' },
          { id: 'exhaust_exp', label: 'POINT_0_EXP', default: '1', type: 'number', step: '0.1' },
          { id: 'exhaust_scale', label: 'POINT_0_SCALE (x, y, z)', default: '0.35, 0.35, 0.3' },
        ]
      },
    ]
  },
  // ─── 4. Wheel Well / Undercarriage ───
  {
    id: 'underside',
    title: 'Wheel Well / Under Carriage Shadows',
    desc: 'Darken wheel wells and undercarriage materials for realism.',
    sections: [
      {
        id: 'underside_dark',
        question: 'Do you want Wheel Well/Under Carriage Shadows Darker?',
        fields: [
          { id: 'underside_mats', label: 'Underside Material(s)', hint: 'Material names for dark underside areas', paste: true },
        ]
      },
    ]
  },
  // ─── 5. Collider ───
  {
    id: 'collider',
    title: 'Smoke Collider',
    desc: 'Select the car exterior mesh that would touch the ground or wall for smoke/spark collision.',
    sections: [
      {
        id: 'smoke_collider',
        question: 'Select Car Exterior That Would Touch Ground or Wall',
        fields: [
          { id: 'collider_mesh', label: 'Collider Mesh', hint: 'Mesh name for tire smoke / spark collision', paste: true },
        ]
      },
    ]
  },
  // ─── 6. Carpaint ───
  {
    id: 'carpaint',
    title: 'Carpaint Reflection',
    desc: 'Apply improved CSP carpaint reflection shader to the body.',
    sections: [
      {
        id: 'carpaint_mat',
        question: 'Do you want Carpaint Reflection Redone?',
        fields: [
          { id: 'carpaint_material', label: 'Carpaint Material', hint: 'Main body paint material name', paste: true },
        ]
      },
    ]
  },
  // ─── 7. Damage ───
  {
    id: 'damage',
    title: 'Visual Damage',
    desc: 'Add visible damage, dust, and dirt to the car body.',
    sections: [
      {
        id: 'damage_tex',
        question: 'Do you want To Add Visual Damage?',
        fields: [
          { id: 'damage_materials', label: 'Body Material(s) for damage', hint: 'Same as carpaint material usually', paste: true },
          { id: 'damage_ao_dir', label: 'AO Map Direction', type: 'choice', choices: [
            { value: 'V', label: 'Vertical (V)' },
            { value: 'H', label: 'Horizontal (H)' },
          ], default: 'V' },
        ]
      },
    ]
  },
  // ─── 8. Hood ───
  {
    id: 'hood',
    title: 'Deforming Hood',
    desc: 'Animated hood deformation on crash.',
    sections: [
      {
        id: 'deforming_hood',
        question: 'Do you want a Deforming Hood?',
        fields: [
          { id: 'hood_name', label: 'Hood Mesh Name (optional)', hint: 'Leave blank if auto-detect works', paste: true },
        ]
      },
    ]
  },
  // ─── 9. Rim & Paint Textures ───
  {
    id: 'rim_textures',
    title: 'Rim & Paint Textures',
    desc: 'Gold rims, silver rims, painted texture, and exterior chrome materials.',
    sections: [
      {
        id: 'gold_rims',
        question: 'Do you want Gold Rim Texture?',
        fields: [
          { id: 'gold_rim_mats', label: 'Gold Rim Material(s)', hint: 'Material name for gold-colored rims', paste: true },
        ]
      },
      {
        id: 'silver_rims',
        question: 'Do you want Silver Rim Texture?',
        fields: [
          { id: 'silver_rim_mats', label: 'Silver Rim Material(s)', hint: 'Material name for silver-colored rims', paste: true },
        ]
      },
      {
        id: 'painted_tex',
        question: 'Do you want a Painted Texture Replacement?',
        fields: [
          { id: 'painted_tex_mats', label: 'Painted Material(s)', paste: true },
        ]
      },
      {
        id: 'ext_chrome',
        question: 'Do you want Exterior Chrome?',
        fields: [
          { id: 'chrome_mats', label: 'Chrome Material(s)', paste: true },
        ]
      },
    ]
  },
  // ─── 10. Underglow ───
  {
    id: 'underglow',
    title: 'Underglow Lights',
    desc: 'LED light strips under the car (bound to headlights).',
    sections: [
      {
        id: 'underglow_lights',
        question: 'Do you want Underglow Lights?',
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
    ]
  },
  // ─── 11. Hide Parts ───
  {
    id: 'emissive',
    title: 'Hide Parts',
    desc: 'Make parts invisible via emissive toggle visibility.',
    sections: [
      {
        id: 'emissive_extra',
        question: 'Do You Want to Hide Any Parts?',
        fields: [
          { id: 'emissive_name', label: 'Part Name/Mesh to Hide', paste: true },
          { id: 'emissive_color', label: 'COLOR (r, g, b)', default: '1, 0, 0' },
          { id: 'emissive_location', label: 'Location', type: 'choice', choices: [
            { value: 'FRONT', label: 'Front' },
            { value: 'REAR', label: 'Rear' },
          ], default: 'FRONT' },
        ]
      },
    ]
  },
  // ─── 12. Custom Rims & Tires (FINAL) ───
  {
    id: 'rims_final',
    title: 'Custom Rims and Tire Replacements',
    desc: 'Swap rim and tire models using the Rim & Tire Swap tool.',
    sections: [
      {
        id: 'rims_tires_final',
        question: 'Do you want Custom Rims and Tire Replacements?',
        isFinal: true,
        fields: []
      },
    ]
  },
];

// ─── State ───
let currentStep = 0;
const state = {};

// ─── Init ───
function init() {
  buildWizard();
  showStep(0);
  document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
  document.getElementById('btn-next').addEventListener('click', () => navigate(1));
  document.getElementById('btn-copy').addEventListener('click', copyOutput);
  document.getElementById('btn-download').addEventListener('click', downloadOutput);
  document.getElementById('btn-back').addEventListener('click', backToWizard);
}

function buildWizard() {
  const wizard = document.getElementById('wizard');
  STEPS.forEach((step, si) => {
    const div = document.createElement('div');
    div.className = 'step';
    div.id = `step-${si}`;

    let html = `<div class="step-header"><h2>${step.title}</h2><p class="step-desc">${step.desc}</p></div>`;

    step.sections.forEach(sec => {
      state[sec.id] = { enabled: false, values: {}, repeats: [] };
      sec.fields.forEach(f => {
        state[sec.id].values[f.id] = f.default || '';
      });

      html += `<div class="toggle-question" data-section="${sec.id}">`;
      html += `<div class="question">${sec.question}</div>`;
      html += `<div class="toggle-btns">`;
      html += `<button data-answer="yes" onclick="toggleSection('${sec.id}', true, this)">✅ Yes</button>`;
      html += `<button data-answer="no" onclick="toggleSection('${sec.id}', false, this)">❌ No</button>`;
      html += `</div>`;

      if (sec.fields.length > 0) {
        html += `<div class="fields" id="fields-${sec.id}">`;
        html += renderFields(sec.fields, sec.id, 0);
        if (sec.repeater) {
          html += `<div id="repeater-${sec.id}"></div>`;
          html += `<button class="repeater-add" onclick="addRepeat('${sec.id}')">${sec.repeatLabel || '+ Add Another'}</button>`;
        }
        html += `</div>`;
      }

      html += `</div>`;
    });

    div.innerHTML = html;
    wizard.appendChild(div);
  });
}

function renderFields(fields, sectionId, repeatIdx) {
  let html = '';
  const prefix = repeatIdx > 0 ? `r${repeatIdx}_` : '';
  fields.forEach(f => {
    const fid = prefix + f.id;
    html += `<div class="field-group">`;
    html += `<label>${f.label}</label>`;
    if (f.hint) html += `<div class="hint">${f.hint}</div>`;
    if (f.type === 'choice') {
      html += `<div class="choice-group">`;
      f.choices.forEach(c => {
        const checked = c.value === f.default ? 'checked' : '';
        html += `<label><input type="radio" name="${sectionId}_${fid}" value="${c.value}" ${checked} onchange="updateVal('${sectionId}','${fid}',this.value,${repeatIdx})">${c.label}</label>`;
      });
      html += `</div>`;
    } else {
      html += `<div class="field-row">`;
      const inputType = f.type === 'number' ? 'number' : 'text';
      const stepAttr = f.step ? `step="${f.step}"` : '';
      html += `<input type="${inputType}" ${stepAttr} id="input-${sectionId}-${fid}" value="${f.default || ''}" placeholder="${f.label}" oninput="updateVal('${sectionId}','${fid}',this.value,${repeatIdx})">`;
      if (f.paste) {
        html += `<button class="btn-paste" onclick="pasteInto('${sectionId}','${fid}',${repeatIdx})">📋 Paste</button>`;
      }
      html += `</div>`;
    }
    html += `</div>`;
  });
  return html;
}

// ─── Interactions ───
window.toggleSection = function(secId, enabled, btn) {
  state[secId].enabled = enabled;
  const parent = btn.closest('.toggle-question');
  parent.querySelectorAll('.toggle-btns button').forEach(b => {
    b.classList.remove('selected-yes', 'selected-no');
  });
  btn.classList.add(enabled ? 'selected-yes' : 'selected-no');

  // Update card border
  parent.classList.remove('answered-yes', 'answered-no');
  parent.classList.add(enabled ? 'answered-yes' : 'answered-no');

  const fields = document.getElementById(`fields-${secId}`);
  if (fields) fields.classList.toggle('open', enabled);

  // Special: final rims/tires question — "Yes" opens Rim & Tire Swap in new tab
  const sec = STEPS.flatMap(s => s.sections).find(s => s.id === secId);
  if (sec?.isFinal && enabled) {
    window.open('https://realisimhq.github.io/Rim-and-Tire-Swap/', '_blank');
  }
};

window.updateVal = function(secId, fid, val, repeatIdx) {
  if (repeatIdx > 0) {
    if (!state[secId].repeats[repeatIdx - 1]) state[secId].repeats[repeatIdx - 1] = {};
    state[secId].repeats[repeatIdx - 1][fid.replace(/^r\d+_/, '')] = val;
  } else {
    state[secId].values[fid] = val;
  }
};

window.pasteInto = async function(secId, fid, repeatIdx) {
  try {
    const text = await navigator.clipboard.readText();
    const input = document.getElementById(`input-${secId}-${fid}`);
    if (input) {
      input.value = text.trim();
      updateVal(secId, fid, text.trim(), repeatIdx);
      input.style.borderColor = 'var(--success)';
      setTimeout(() => input.style.borderColor = '', 800);
    }
  } catch (e) {
    alert('Clipboard access denied. Please paste manually (Ctrl+V).');
  }
};

window.addRepeat = function(secId) {
  const step = STEPS.flatMap(s => s.sections).find(s => s.id === secId);
  if (!step) return;
  const idx = state[secId].repeats.length + 1;
  state[secId].repeats.push({});
  step.fields.forEach(f => {
    state[secId].repeats[idx - 1][f.id] = f.default || '';
  });
  const container = document.getElementById(`repeater-${secId}`);
  const entry = document.createElement('div');
  entry.className = 'exhaust-entry';
  entry.innerHTML = `<strong>#${idx + 1}</strong>` + renderFields(step.fields, secId, idx);
  container.appendChild(entry);
};

// ─── Navigation ───
function showStep(idx) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(`step-${idx}`);
  if (el) el.classList.add('active');
  document.getElementById('btn-prev').disabled = idx === 0;
  const isLast = idx === STEPS.length - 1;
  const nextBtn = document.getElementById('btn-next');
  if (isLast) {
    nextBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> Generate`;
    nextBtn.className = 'btn-glow gold';
  } else {
    nextBtn.innerHTML = `Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`;
    nextBtn.className = 'btn-glow cyan';
  }
  document.getElementById('step-indicator').textContent = `Step ${idx + 1} of ${STEPS.length}`;
  const pct = ((idx + 1) / STEPS.length) * 100;
  document.getElementById('step-progress').style.setProperty('--progress', pct + '%');
}

function navigate(dir) {
  if (dir > 0 && currentStep === STEPS.length - 1) {
    generateOutput();
    return;
  }
  currentStep = Math.max(0, Math.min(STEPS.length - 1, currentStep + dir));
  showStep(currentStep);
}

// ─── Output Generation ───
function generateOutput() {
  const lines = [];
  const L = (t = '') => lines.push(t);
  const SEP = ';===================================================================================================================';

  // ── Header + Includes ──
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

  // ── Audio Pitch ──
  if (state.audio_pitch?.enabled) {
    L(SEP);
    L('; ~ Audio ~');
    L(SEP);
    L('[AUDIO_PITCH]');
    L(`ENGINE_EXT=${state.audio_pitch.values.engine_ext_pitch}`);
    L(`ENGINE_INT=${state.audio_pitch.values.engine_int_pitch}`);
    L(`SKID_EXT = ${state.audio_pitch.values.skid_ext_pitch}`);
    L(`SKID_INT = ${state.audio_pitch.values.skid_int_pitch}`);
    L();
  }

  // ── Audio Volume ──
  if (state.audio_volume?.enabled) {
    if (!state.audio_pitch?.enabled) { L(SEP); L('; ~ Audio ~'); L(SEP); }
    L('[AUDIO_VOLUME]');
    const vols = [
      ['ENGINE_EXT', 'vol_engine_ext'], ['ENGINE_INT', 'vol_engine_int'],
      ['GEAR_EXT', 'vol_gear_ext'], ['GEAR_INT', 'vol_gear_int'],
      ['BODYWORK', 'vol_bodywork'], ['WIND', 'vol_wind'], ['DIRT', 'vol_dirt'],
      ['DOWN_SHIFT', 'vol_down_shift'], ['HORN', 'vol_horn'], ['GEAR_GRIND', 'vol_gear_grind'],
      ['BACKFIRE_EXT', 'vol_backfire_ext'], ['BACKFIRE_INT', 'vol_backfire_int'],
      ['TRANSMISSION', 'vol_transmission'], ['LIMITER', 'vol_limiter'], ['TURBO', 'vol_turbo'],
      ['SKID_EXT', 'vol_skid_ext'], ['SKID_INT', 'vol_skid_int'],
    ];
    vols.forEach(([k, id]) => L(`${k} = ${state.audio_volume.values[id]}`));
    L();
  }

  // ── Ext Glass ──
  if (state.ext_glass?.enabled) {
    L(SEP);
    L('; Exterior Glass');
    L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${state.ext_glass.values.ext_glass_mat}`);
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

  // ── Int Glass ──
  if (state.int_glass?.enabled) {
    L(SEP);
    L('; Interior Glass');
    L(SEP);
    L('[SHADER_REPLACEMENT_100]');
    L(`MATERIALS = ${state.int_glass.values.int_glass_mat}`);
    L('SHADER = ksWindscreen');
    L();
  }

  // ── Shaking Exhaust ──
  if (state.shaking_exhaust?.enabled) {
    L(SEP);
    L('; SHAKING EXHAUST');
    L(SEP);
    const allExhausts = [state.shaking_exhaust.values, ...state.shaking_exhaust.repeats];
    allExhausts.forEach(ex => {
      L('[SHAKING_EXHAUST_...]');
      L(`MESHES = ${ex.exhaust_mesh || ''}`);
      L(`POINT_0 = ${ex.exhaust_point || '1, 2, 3'}`);
      L(`POINT_0_RADIUS = ${ex.exhaust_radius || '1'}`);
      L(`POINT_0_EXP = ${ex.exhaust_exp || '1'}`);
      L(`POINT_0_SCALE = ${ex.exhaust_scale || '0.35, 0.35, 0.3'}`);
      L();
    });
  }

  // ── Underside ──
  if (state.underside_dark?.enabled) {
    L(SEP);
    L('; Wheel Well / Under Carriage Shadows');
    L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${state.underside_dark.values.underside_mats}`);
    L('PROP_... = ksAmbient, 0.01');
    L('PROP_... = ksDiffuse, 0.01');
    L('DOUBLE_FACE_SHADOW_BIASED = 1');
    L();
  }

  // ── Smoke Collider ──
  if (state.smoke_collider?.enabled) {
    L(SEP);
    L('; Smoke Collider');
    L(SEP);
    L('[COLLIDER_0]');
    L(`MESHES= ${state.smoke_collider.values.collider_mesh}`);
    L('POSITION_OFFSET=0,0,0');
    L('RADIUS=0.1');
    L();
  }

  // ── Carpaint ──
  if (state.carpaint_mat?.enabled) {
    L(SEP);
    L('; Carpaint');
    L(SEP);
    L('[INCLUDE: common/materials_carpaint.ini]');
    L(`CarPaintMaterial = ${state.carpaint_mat.values.carpaint_material}`);
    L('CarPaintVersionAware = 4');
    L('DisableDev = 1');
    L('COLLIDER_1_SPARKS_AS=TITANIUM, SKIDPAD');
    L();
  }

  // ── Damage ──
  if (state.damage_tex?.enabled) {
    const dir = state.damage_tex.values.damage_ao_dir || 'V';
    L(SEP);
    L('; Car Damage Textures');
    L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${state.damage_tex.values.damage_materials}`);
    L('SHADER = ksPerPixelMultiMap_damage_dirt');
    L('PROP_... = ksAmbient, 0.45');
    L('PROP_... = ksDiffuse, 0.5');
    L('PROP_... = ksSpecular, 0.6');
    L('PROP_... = ksSpecularEXP, 120');
    L('PROP_... = KsAlphaRef, 1');
    L('PROP_... = fresnelC, 0.07');
    L('PROP_... = fresnelEXP, 3.5');
    L('PROP_... = fresnelMaxLevel, 0.6');
    L('PROP_... = nmObjectSpace, 0');
    L('PROP_... = isAdditive, 2');
    L('PROP_... = useDetail, 1');
    L('PROP_... = detailUVMultiplier, 40');
    L('PROP_... = shadowBiasMult, 0');
    L('PROP_... = damageZones, 0,0,0,0');
    L('PROP_... = dirt, 0.00');
    L('PROP_... = sunSpecular, 12');
    L('PROP_... = sunSpecularEXP, 2000');
    L('PROP_... = extNormalizeAO, 1');
    L('RESOURCE_0 = txDiffuse');
    L('RESOURCE_FILE_0 = carpaint.dds');
    L('RESOURCE_1 = txNormal');
    L('RESOURCE_FILE_1 = carpaint_nm.dds');
    L('RESOURCE_2 = txMaps');
    L('RESOURCE_FILE_2 = carpaint_maps.dds');
    L('RESOURCE_3 = txDetail');
    L('RESOURCE_FILE_3 = metal_detail.dds');
    L('RESOURCE_4 = txDamage');
    L(`RESOURCE_FILE_4 = /../../parts/textures/Damage/carpaint_Damage_${dir}.dds`);
    L('RESOURCE_5 = txDust');
    L(`RESOURCE_FILE_5 = /../../parts/textures/Damage/carpaint_Dust_${dir}.dds`);
    L('RESOURCE_6 = txDamageMask');
    L(`RESOURCE_FILE_6 = /../../parts/textures/Damage/carpaint_Damage_Maps_${dir}.dds`);
    L();
  }

  // ── Deforming Hood ──
  if (state.deforming_hood?.enabled) {
    L(SEP);
    L('; DEFORMING HOOD');
    L(SEP);
    L('[DEFORMING_HOOD]');
    L(`NAME=${state.deforming_hood.values.hood_name || ''}`);
    L('OFFSET_Y_MIDDLE=0.03');
    L('OFFSET_Y_END=-0.06');
    L('OFFSET_Z_END=0.02');
    L('BULGING_EXTRA=0.05');
    L('BULGING_EXPONENT=2.0');
    L('NOISE_Y_AMPLITUDE=-0.4');
    L('NOISE_Z_AMPLITUDE=0.4');
    L('NOISE_Y_FREQENCY=-4.0');
    L('NOISE_Z_FREQENCY=4.0');
    L('Z_FACTOR=2.5');
    L();
  }

  // ── Gold Rims ──
  if (state.gold_rims?.enabled) {
    L(SEP);
    L('; Gold Rims');
    L(SEP);
    L('[Material_Aluminium_v2]');
    L(`Materials= ${state.gold_rims.values.gold_rim_mats}`);
    L('Metalness=0.5');
    L('Reflectance=0.15');
    L('BrightnessAdjustment=0.35');
    L('DetailTexture=1');
    L('DetailNormalTexture = common/pbr_metal.dds');
    L('DetailNormalPBRSecondaryColor = 0.5, 0.45, 0.1, 0.3');
    L('DetailScale=1');
    L('DetailNormalBlend=1');
    L('DetailNormalPBRSmoothnessGamma=0.8');
    L();
  }

  // ── Silver Rims ──
  if (state.silver_rims?.enabled) {
    L(SEP);
    L('; Silver Rims');
    L(SEP);
    L('[Material_Aluminium_v2]');
    L(`Materials= ${state.silver_rims.values.silver_rim_mats}`);
    L('Metalness=0.5');
    L('Reflectance=0.15');
    L('BrightnessAdjustment=0.35');
    L('DetailTexture=1');
    L('DetailNormalTexture = common/pbr_metal.dds');
    L('DetailNormalPBRSecondaryColor = 0.5, 0.5, 0.5, 0.5');
    L('DetailScale=1');
    L('DetailNormalBlend=1');
    L('DetailNormalPBRSmoothnessGamma=0.8');
    L();
  }

  // ── Painted Texture ──
  if (state.painted_tex?.enabled) {
    L(SEP);
    L('; Painted Texture');
    L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${state.painted_tex.values.painted_tex_mats}`);
    L('PROP_... = ksAmbient, 0.45');
    L('PROP_... = ksDiffuse, 0.5');
    L('PROP_... = ksSpecular, 0.6');
    L('PROP_... = ksSpecularEXP, 60');
    L('PROP_... = KsAlphaRef, 0');
    L('PROP_... = fresnelC, 0.07');
    L('PROP_... = fresnelEXP, 3.5');
    L('PROP_... = fresnelMaxLevel, 0.5');
    L('PROP_... = isAdditive, 2');
    L('PROP_... = useDetail, 1');
    L('PROP_... = detailUVMultiplier, 120');
    L('PROP_... = shadowBiasMult, 30');
    L('PROP_... = damageZones, 0');
    L('PROP_... = dirt, 0');
    L('PROP_... = sunSpecular, 90');
    L('PROP_... = sunSpecularEXP, 6500');
    L('DOUBLE_FACE_SHADOW_BIASED = 1');
    L();
  }

  // ── Ext Chrome ──
  if (state.ext_chrome?.enabled) {
    L(SEP);
    L('; Exterior Chrome');
    L(SEP);
    L('[Material_Metal_v2]');
    L(`Materials= ${state.ext_chrome.values.chrome_mats}`);
    L('BrightnessAdjustment = 0.4');
    L('DetailScale = 1');
    L('Metalness = 0.5');
    L('Reflectance = 0.5');
    L('LocalReflectionsSharpness = 0.1');
    L();
  }

  // ── Underglow ──
  if (state.underglow_lights?.enabled) {
    const v = state.underglow_lights.values;
    const blinking = v.ug_blinking === '1';
    L(SEP);
    L('; Underglow Lights');
    L(SEP);
    const ugSides = [
      { name: '1', from: '-0.7, 0.20, -1.8', to: '0.7, 0.20, -1.8', conc: '0.7' },
      { name: '2', from: '0.8, 0.20, 0.8', to: '0.8, 0.20, -0.8', conc: '0.8' },
      { name: '3', from: '-0.8, 0.20, 0.8', to: '-0.8, 0.20, -0.8', conc: '0.8' },
      { name: '4', from: '-0.7, 0.20, 2.0', to: '0.7, 0.20, 2.0', conc: '0.8' },
    ];
    ugSides.forEach(side => {
      L(`[LIGHT_EXTRA_${side.name}]`);
      L(`LINE_FROM=${side.from}`);
      L(`LINE_TO=${side.to}`);
      L('BIND_TO_HEADLIGHTS=1');
      L(`COLOR_FROM=${v.ug_color_from}`);
      L(`COLOR_TO=${v.ug_color_to}`);
      L(`DIFFUSE_CONCENTRATION=${side.conc}`);
      L('FADE_AT=150');
      L('FADE_SMOOTH=8');
      L(`RANGE=${v.ug_range}`);
      L('RANGE_GRADIENT_OFFSET=0.1');
      L(`SPOT=${v.ug_spot}`);
      L('SPOT_SHARPNESS=0.5');
      L('SPECULAR_MULT=0');
      L('DIRECTION=0,-1,0');
      L('SELF_LIGHTNING=1');
      L('EXTERIOR_ONLY=0');
      L('INTERIOR_ONLY=0');
      L('SIMULATE_HEATING=0');
      if (blinking) {
        L('BLINKING_PATTERN=(0=1|1=0|2=1|3=0|4=1|5=0|6=1|7=0)');
        L('BLINKING_DURATION=8');
      }
      L();
    });
  }

  // ── Emissive / Hide Parts ──
  if (state.emissive_extra?.enabled) {
    const v = state.emissive_extra.values;
    L(SEP);
    L('; Hidden Parts');
    L(SEP);
    L('[EMISSIVE_EXTRA_F_...]');
    L(`NAME = ${v.emissive_name}`);
    L(`COLOR = ${v.emissive_color}`);
    L('OFF_COLOR = 0, 0, 0');
    L('LAG = 0.');
    L('SIMULATE_HEATING = 0.');
    L(`LOCATION = ${v.emissive_location || 'FRONT'}`);
    L('ACT_AS_HEADLIGHTS = 0');
    L('TOGGLE_VISIBILITY = 1');
    L('TOGGLE_VISIBILITY_INVERSE = 0');
    L();
  }

  // ── Includes before rims ──
  L('[INCLUDE: common/materials_interior.ini]');
  L('[INCLUDE: common/custom_rims.ini]');
  L();

  // ══════════════════════════════════════════════════════════════════════
  // STATIC DEFAULTS — Always appended
  // ══════════════════════════════════════════════════════════════════════
  L(SEP);
  L(';---------------------------------------------Rarely Changed--------------------------------------------------------');
  L(SEP);
  L();

  // ── Tyre Shader (static) ──
  L(SEP);
  L('; Tyres');
  L(SEP);
  L('[SHADER_REPLACEMENT_...]');
  L('MATERIALS = 21 - Default, Tyre.001, TIRE, Tyre_Stock, Tyre_Pro, Tyre_Thicc, Tyre, Tyres, TYRE, TIRE, TYRES');
  L('PROP_... = ksAmbient, 0.25');
  L('PROP_... = ksDiffuse, 0.12');
  L('PROP_... = ksSpecular, 0.002');
  L('PROP_... = ksSpecularEXP, 350');
  L('PROP_... = KsAlphaRef, 0');
  L('PROP_... = blurLevel, 0');
  L('PROP_... = dirtyLevel, 0.02');
  L('PROP_... = fresnelC, 0.000');
  L('PROP_... = fresnelEXP, 5');
  L('PROP_... = fresnelMaxLevel, 0.000');
  L('PROP_... = isAdditive, 0');
  L('DOUBLE_FACE_SHADOW_BIASED = 1');
  L();

  // ── Driver (static) ──
  L(SEP);
  L('; Driver');
  L(SEP);
  L('[SHADER_REPLACEMENT_...]');
  L('MESHES = DRIVER:suit');
  L('MATERIALS = RT_DriverSuit');
  L('SHADER = ksSkinnedMesh_NMDetaill');
  L('RESOURCE_0 = txDiffuse');
  L('RESOURCE_FILE_0 =/../../parts/Driver/2016_Suit_DIFF.dds');
  L('RESOURCE_1 = txNormal');
  L('RESOURCE_FILE_1 =/../../parts/Driver/2016_Suit_NM.dds');
  L();
  L('[SHADER_REPLACEMENT_...]');
  L('MESHES = DRIVER:Gloves');
  L('MATERIALS = RT_Gloves');
  L('SHADER = ksSkinnedMesh_NMDetaill');
  L('RESOURCE_0 = txDiffuse');
  L('RESOURCE_FILE_0 =/../../parts/Driver/2016_Gloves_DIFF.dds');
  L('RESOURCE_1 = txNormal');
  L('RESOURCE_FILE_1 =/../../parts/Driver/2016_Gloves_nm.dds');
  L();
  L('[SHADER_REPLACEMENT_...]');
  L('MATERIALS = RT_HELMET_Glass');
  L('SHADER = ksPerPixelMultiMap');
  L('RESOURCE_0 = txDiffuse');
  L('RESOURCE_FILE_0 =/../../parts/Driver/Helmet_2012_Glass.dds');
  L('RESOURCE_1 = txNormal');
  L('RESOURCE_FILE_1 =/../../parts/Driver/flat_nm.dds');
  L('RESOURCE_2 = txMaps');
  L('RESOURCE_FILE_2 =/../../parts/Driver/HELMET_2012_map.dds');
  L('RESOURCE_3 = txDetail');
  L('RESOURCE_FILE_3 =null.dds');
  L();
  L('[SHADER_REPLACEMENT_...]');
  L('MESHES = DRIVER:HELMET_SUB0');
  L('MATERIALS = RT_Helemt');
  L('SHADER = ksPerPixelMultiMap');
  L('RESOURCE_0 = txDiffuse');
  L('RESOURCE_FILE_0 =/../../parts/Driver/HELMET_2012.dds');
  L('RESOURCE_1 = txNormal');
  L('RESOURCE_FILE_1 =/../../flat_nm.dds');
  L();

  // ── Steering Wheel (static) ──
  L(SEP);
  L('; Steering Wheel');
  L(SEP);
  L('[MODEL_REPLACEMENT_...]');
  L('FILE = car.kn5');
  L('INSERT = /../../parts/Steering Wheels/vertex_wheel.kn5');
  L('INSERT_AFTER = COCKPIT_HR');
  L('HIDE =');
  L('SCALE = 1.0, 1.0, 1.0');
  L('ROTATION = 0.0, 0.0, 0.0');
  L('OFFSET = 0, 0, 0');
  L();

  // ── TyresFX Custom Textures (static) ──
  L(SEP);
  L('; TyresFX Custom Textures');
  L(SEP);
  L('[SHADER_REPLACEMENT_...]');
  L('MATERIALS = 21 - Default, Tyre.001, Tyre_Stock, Tyre_Pro, Tyre_Thicc');
  L('SHADER = ksTyresFX');
  L();
  for (let i = 0; i <= 2; i++) {
    L(`[TYRES_FX_CUSTOMTEXTURE_${i}]`);
    L('TXDIFFUSE = /../../parts/tyre/Federal_595RS_white_letter/tyre1.dds');
    L('TXBLUR = /../../parts/tyre/Federal_595RS_white_letter/tyre1.dds');
    L('TXNORMAL = /../../parts/tyre/Federal_595RS_white_letter/tyre1_NM.dds');
    L('TXNORMALBLUR = /../../parts/tyre/Federal_595RS_white_letter/tyre1_NM.dds');
    L();
  }
  for (let i = 3; i <= 5; i++) {
    L(`[TYRES_FX_CUSTOMTEXTURE_${i}]`);
    L('TXDIFFUSE = /../../parts/tyre/KendaKR20A/tyre.dds');
    L('TXBLUR = /../../parts/tyre/KendaKR20A/tyre.dds');
    L('TXNORMAL = /../../parts/tyre/KendaKR20A/tyre_nm.dds');
    L('TXNORMALBLUR = /../../parts/tyre/KendaKR20A/tyre_nm.dds');
    L();
  }
  L('[TYRES_FX_CUSTOMTEXTURE_6]');
  L('TXDIFFUSE = /../../parts/tyre/Armstrong_BluTracHP/tyre.dds');
  L('TXBLUR = /../../parts/tyre/Armstrong_BluTracHP/tyre.dds');
  L('TXDIRT = /../../parts/tyre/Armstrong_BluTracHP/tyre_dirt.dds');
  L('TXNORMAL = /../../parts/tyre/Armstrong_BluTracHP/tyre_nm.dds');
  L('TXNORMALBLUR = /../../parts/tyre/Armstrong_BluTracHP/tyre_nm.dds');
  L();
  L('[TYRES_FX_CUSTOMTEXTURE_7]');
  L('TXDIFFUSE = /../../parts/tyre/accelera_651/tyre.dds');
  L('TXBLUR = /../../parts/tyre/accelera_651/tyre_blur.dds');
  L('TXDIRT = /../../parts/tyre/accelera_651/dirt.dds');
  L('TXNORMAL = /../../parts/tyre/accelera_651/tyre_nm.dds');
  L('TXNORMALBLUR = /../../parts/tyre/accelera_651/tyre_blur_nm.dds');
  L();

  // ── Brake FX (static) ──
  L(SEP);
  L('; Brake FX');
  L(SEP);
  L('[Material_CarPaint_Metallic]');
  L('Materials = EXT_CaliperHatPaint');
  L('NormalsMode = BASIC');
  L('ClearCoatThickness = 0.1');
  L('SpecularColor = 1');
  L('SpecularMult = 1.25');
  L('FresnelMax = 0.5');
  L('FresnelC = 0.14');
  L('BrightnessAdjustment = 0.55');
  L();
  L('[Material_Aluminium_v2]');
  L('Materials= EXT_CaliperHardware');
  L('Metalness = 0.9');
  L('Reflectance = 0');
  L('Smoothness = 0');
  L('BrightnessAdjustment = 0.38');
  L('DetailTexture = 1');
  L('DetailNormalTexture = common/pbr_metal.dds');
  L('DetailNormalPBRSecondaryColor = 0, 0, 0, 0');
  L('DetailScale = 0');
  L('DetailNormalBlend = 1');
  L('DetailNormalPBRSmoothnessGamma = 1');
  L('OcclusionSource = MAPS_ALPHA');
  L();
  L('[BRAKEDISC_FX]');
  L('ACTIVE = 1');
  L('CERAMIC = 1');
  L('CARVED = 0');
  L('CARVED_FREQUENCY = 20');
  L('GLOW_OFFSET = 1.5');
  L('DEBUG = 0');
  L('DISC_INTERNAL_RADIUS = 0.1');
  L('DISC_RADIUS = 0.16383');
  L('WEAR_FORCE = 0.45');
  L('GLOW_FORCE = 0');
  L();

  // ── Exhaust Flames (static) ──
  L(SEP);
  L('; Exhaust Flames');
  L(SEP);
  L('[EXHAUST_FLAMES]');
  L('ANTILAG=1');
  L('ANTILAG_DELAY=0.0');
  L('ANTILAG_INTENSITY=1');
  L('ANTILAG_TURBO_THRESHOLD=0');
  L('DAMAGE=1');
  L('DAMAGE_DURATION=1.00');
  L('DAMAGE_INTENSITY=1');
  L('DAMAGE_PROBABILITY=1');
  L('DISCHARGE=1');
  L('DISCHARGE_CHARGE_TIME=0.1');
  L('DISCHARGE_DELAY=0');
  L('DISCHARGE_DURATION=0.250');
  L('DISCHARGE_PROBABILITY=0.25');
  L('DISCHARGE_INTENSITY=0.5');
  L('DISCHARGE_WATER_TEMPERATURE_THRESHOLD=70');
  L('FLAT_SHIFT=1');
  L('FLAT_SHIFT_COOLDOWN=0');
  L('FLAT_SHIFT_DURATION=0.25');
  L('FLAT_SHIFT_GAS_THRESHOLD=75');
  L('FLAT_SHIFT_INTENSITY=0.65');
  L('FLAT_SHIFT_PROBABILITY=1');
  L('LIMITER=1');
  L('LIMITER_DELAY=0');
  L('LIMITER_INTENSITY=0.15');
  L();
  L('[LIGHT_FLAMES]');
  L('CAR_BRIGHTNESS_MULT=0,9');
  L('OFFSET_DIR=0,15');
  L('OFFSET_POS=0,25');
  L('SPOT=300');
  L();

  // ── Particles FX (static) ──
  L(SEP);
  L('; Particles FX');
  L(SEP);
  L('[PARTICLES_FX]');
  L('BRAKES_SMOKE=1');
  L('ENGINE_SMOKE=1');
  L('EXHAUST_SMOKE=1');
  L('DRAG_MULT=2');
  L('LIFT_MULT=0.1');
  L('BODY_SMOKE_AMOUNT=0');
  L("BODY_SMOKE_COLOR='0, 0, 0, 0'");
  L('BODY_SMOKE_COLOR_CONSISTENCY=0');
  L('BODY_SMOKE_GROW_MULTIPLIER=1');
  L('BODY_SMOKE_INTENSITY=1');
  L('BODY_SMOKE_LIFETIME=1');
  L('BODY_SMOKE_SIZE_MULTIPLIER=1');
  L('BODY_SMOKE_SPREAD_MULTIPLIER=1');
  L('BODY_SMOKE_TARGET_Y_VELOCITY=-0.3');
  L('BODY_SMOKE_THICKNESS=0');
  L('BODY_SPARKS_AMOUNT=0.25');
  L("BODY_SPARKS_COLOR='1, 0.5, 0, 10'");
  L('BODY_SPARKS_INTENSITY=0.2');
  L('BODY_SPARKS_LIFETIME=0.4');
  L('COLLIDER_0_SMOKE_AMOUNT=0');
  L("COLLIDER_0_SMOKE_COLOR='0, 0, 0, 0'");
  L('COLLIDER_0_SMOKE_COLOR_CONSISTENCY=0');
  L('COLLIDER_0_SMOKE_GROW_MULTIPLIER=1');
  L('COLLIDER_0_SMOKE_INTENSITY=1');
  L('COLLIDER_0_SMOKE_LIFETIME=1');
  L('COLLIDER_0_SMOKE_SIZE_MULTIPLIER=1');
  L('COLLIDER_0_SMOKE_SPREAD_MULTIPLIER=1');
  L('COLLIDER_0_SMOKE_TARGET_Y_VELOCITY=-0.3');
  L('COLLIDER_0_SMOKE_THICKNESS=0');
  L('COLLIDER_0_SPARKS_AMOUNT=0.25');
  L("COLLIDER_0_SPARKS_COLOR='1, 0.5, 0, 10'");
  L('COLLIDER_0_SPARKS_INTENSITY=0.2');
  L('COLLIDER_0_SPARKS_LIFETIME=0.4');
  L("SMOKE_BS_OFFSET_FRONT='0, 0, 0'");
  L("SMOKE_BS_OFFSET_MIDDLE='0, 0, 0'");
  L("SMOKE_BS_OFFSET_REAR='0, 0, 0'");
  L('SMOKE_BS_RADIUS_FRONT=1.05');
  L('SMOKE_BS_RADIUS_MIDDLE=1.05');
  L('SMOKE_BS_RADIUS_REAR=1.05');
  L("SMOKE_COLLIDER_OFFSET='0, 0'");
  L('SMOKE_COLLIDER_RADIUS=2');
  L('SMOKE_FLAMES_POWER_APPEARING=60');
  L('SMOKE_FLAMES_POWER_MAIN=30');
  L('SMOKE_FLAMES_RADIUS_APPEARING=10');
  L('SMOKE_FLAMES_RADIUS_MAIN=1');
  L('SMOKE_PUSHAWAY_STRENGTH=12');
  L('SPARKS_AMOUNT_MULT=2');
  L('SPARKS_COOLDOWN_LAG=0.96');
  L('SPARKS_DEPTH_EXP=4');
  L('SPARKS_MAX_DEPTH=0.0025');
  L('SPARKS_OVERLOAD_LAG=0.7');
  L("TRACES_LIGHTS_POS='0.658934, 0.739916, -2.08433'");
  L('TRACES_LIGHTS_SIZE=-1');
  L('SMOKE_BLOCK_START = 0.4');
  L('SMOKE_BLOCK_END = 0.6');
  L('SMOKE_COLOR = 43, 100, 130');
  L('SMOKE_FORCE_THICKNESS = 0.0');
  L();

  // ── TyresFX Flex (static) ──
  L(SEP);
  L('; TyresFX Flex');
  L(SEP);
  L('[TYRES_FX_FRONT]');
  L('ENABLED=1');
  L('FLEX_MAX_SKEW_MULT=1.1');
  L('FLEX_MULT=1');
  L('FLEX_PROFILE_MULT=0.45');
  L('FLEX_SKEW_RANGE_MULT=3');
  L('FLEX_SKEW_SMOOTHING=0.1');
  L('FLEX_SQUASH_SMOOTHING=1.1');
  L('NOFX_DISTANCE_SWITCH=40');
  L('VISIBLE_IN_INTERIOR_CAM=1');
  L();
  L('[TYRES_FX_REAR]');
  L('ENABLED=1');
  L('FLEX_MAX_SKEW_MULT=1.1');
  L('FLEX_MULT=1');
  L('FLEX_PROFILE_MULT=1.25');
  L('FLEX_SKEW_RANGE_MULT=3');
  L('FLEX_SKEW_SMOOTHING=0.1');
  L('FLEX_SQUASH_SMOOTHING=0.1');
  L('NOFX_DISTANCE_SWITCH=40');
  L('VISIBLE_IN_INTERIOR_CAM=1');
  L();

  // ── Driver 3D Model (static) ──
  L('[DRIVER3D_MODEL]');
  L('NAME=/../../parts/Driver/Bare_Hands.kn5');
  L('POSITION=0.0,0.0,0.0');
  L();

  // ── Physics & FFB (static) ──
  L(SEP);
  L('; Physics & FFB');
  L(SEP);
  L('[BASIC]');
  L('BRAKES_THRESHOLD = 0.01');
  L('LIGHT_DAMAGE_SPEED_MIN = 40');
  L('LIGHT_DAMAGE_SPEED_MAX = 120');
  L('IS_LOW_BEAM_AVAILABLE = 1');
  L('HEADLIGHTS_ARE_HEADLIGHTS = 1');
  L('STOP_LODS_ADJUSTMENT = 0');
  L('IGNORE_OTHER_CONFIGS = 0');
  L('BOUNDING_SPHERE_RADIUS=3');
  L('ENGINE_STALLED_RPM_THRESHOLD=750');
  L('TURNING_LIGHTS_REPEAT=1');
  L();
  L('[BOUNCED_INTERIOR_LIGHT]');
  L('ACTIVE=1');
  L('DIRECTION=0, 1, -2');
  L('MULT=1, 1, 1, 0.5');
  L('OFFSET=0, -1, 3');
  L('RANGE=3.2');
  L('RANGE_GRADIENT_OFFSET=0.9');
  L('SPOT=20');
  L('SPOT_SHARPNESS=0.9');
  L();
  L('[INCLUDE: common/ffbtweaks.ini]');
  L('[INCLUDE: common/general.ini]');
  L();
  L('[GYRO2]');
  L('ENABLED=1');
  L();
  L('[POSTPROCESSING]');
  L('CLEAN_FFB=1');
  L();
  L('[POSTPROCESSING_SCRIPT_SETTINGS]');
  L('__PLUGIN_SETTINGS=POSTPROCESSING_SCRIPT/IMPLEMENTATION, extension/state/lua/soft_lock/{0}__settings.ini');
  L();
  L('[CUSTOM_SOFT_LOCK]');
  L('ENABLED=1');
  L('PADDING=10');
  L('SHIFT_PADDING=0.8');
  L('FORCE_FACTOR=1');
  L('SPEED_FACTOR=1');
  L('DAMPER=0');
  L();
  L('[REAL_FEEL]');
  L('ENABLED=0');
  L('ENABLE_FOR_ALL=0');
  L();
  L('[TWEAKS]');
  L('STRUT_FFB_ADJUSTMENT=1');
  L('FADE_IN_AFTER_LOADING=1');
  L();
  L('[PHYSICS_EXPERIMENTS]');
  L('EXTENDED_PHYSICS=1');
  L('STALLING=0');
  L('ENABLE_MESH_COLLIDER_SOONER=1');
  L('CLAMP_MESH_COLLIDERS=1');
  L('EXTEND_COLLIDER_BOXES=1');
  L('EXTRAPOLATE_STATE=1');
  L('DISABLE_AUTOBRAKING=0');
  L('AWAKE_IN_PITS=1');
  L('PHYSICS_SHADOWS=1');
  L('TYRE_SHIFT_SURFACE_PROPERLY=1');
  L('TYRE_SINE_ALTERS_NORMALS=1');
  L('TYRE_PERLIN_SURFACE_NOISE=1');
  L('ALT_COLLISIONS_HANDLING=1');
  L('ALT_COLLISIONS_PROCESSING=1');
  L('FIX_SPAWN_POINTS=1');
  L('PARALLELIZED_CONTACTS=1');
  L('ALT_DEPTH_FOR_CAR_BOX_VS_TRACK=1');
  L('TOE_ROD_THING=1');
  L('DIFF_THING=1');
  L();
  L('[PHYSICS_EXPERIMENTS_DONE]');
  L('SLIDING_FIX=1');
  L('BRAKES_LIMIT=1');
  L('RIM_COLLISION=1');
  L('SMOOTH_COLLISIONS=1');
  L('ADAPTIVE_HARD_COLLISIONS=1');
  L('OPTIMIZE_ROTATION=1');
  L('ODE_AFTER_GRAPHICS=1');
  L('SMOOTH_CONTROLS_LOCKING=1');
  L('RANDOMIZE_WHEEL_ANGLES=1');
  L('CUSTOM_POBJECTS_MOTION=1');
  L('CUSTOM_THREADPOOL=1');
  L('ALTERNATIVE_OPTIMAL_BRAKE=1');
  L('REPAIR_WHEELS=1');
  L('FIX_GROUND_COLLIDERS=1');
  L('FIX_SURFACE_TYPES=1');
  L();
  L('[REFLECTIONS_FX]');
  L('ALLOW_INTERIOR_SSAO=0');
  L('ALLOW_INTERIOR_SSGI=0');
  L('AUTOFIX=1');
  L('MASK_CUBEMAP_ENABLED=1');
  L('MASK_CUBEMAP_OFFSET=0, -0.1, 0.2');
  L('MASK_CUBEMAP_TWEAK=0.5');
  L();
  L('[SMART_MIRROR]');
  L('DISALLOW_MAPPING_NORMALIZATION=0');
  L('DISALLOW_REAR_MIRROR=0');
  L('DISALLOW_REFLECTION_TILTING=0');
  L('SHAKING=1');
  L();
  L('[SCRIPT_...]');
  L('SCRIPT = nos.lua');
  L('[SCRIPT_...]');
  L('SCRIPT = audio.lua');
  L('[SCRIPT_...]');
  L('SCRIPT = bending.lua');
  L('[SCRIPT_...]');
  L('SCRIPT = collision_sfx.lua');
  L();
  L('[EXTRA_SWITCHES]');
  L('SWITCH_E_FLAGS = HOLD_MODE');
  L();

  // Show output
  const output = lines.join('\n');
  document.getElementById('output-code').textContent = output;
  document.getElementById('wizard').style.display = 'none';
  document.getElementById('wizard-nav').style.display = 'none';
  document.getElementById('output-section').style.display = 'block';
}

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
}

document.addEventListener('DOMContentLoaded', init);
