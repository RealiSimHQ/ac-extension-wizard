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
    desc: 'Exterior and interior glass materials.',
    sections: [
      {
        id: 'ext_glass',
        question: 'Do you want Exterior Glass replacement?',
        fields: [
          { id: 'ext_glass_mat', label: 'Exterior Glass Material(s)', hint: 'CM Showroom — click the glass, copy material name', paste: true },
        ]
      },
      {
        id: 'int_glass',
        question: 'Do you want Interior Windscreen shader?',
        fields: [
          { id: 'int_glass_mat', label: 'Interior Window Material(s)', hint: 'Click interior window in CM Showroom, copy material name', paste: true },
        ]
      },
    ]
  },
  // ─── 3. Exhaust ───
  {
    id: 'exhaust',
    title: 'Shaking Exhaust',
    desc: 'Add animated exhaust tips that shake with RPM.',
    sections: [
      {
        id: 'shaking_exhaust',
        question: 'Do you want Shaking Exhaust?',
        repeater: true,
        repeatLabel: '+ Add Another Exhaust',
        fields: [
          { id: 'exhaust_mesh', label: 'Exhaust Mesh', hint: 'Click exhaust tip in CM Showroom, copy mesh name', paste: true },
          { id: 'exhaust_point', label: 'POINT_0 (x, y, z)', default: '1, 2, 3' },
          { id: 'exhaust_radius', label: 'POINT_0_RADIUS', default: '1', type: 'number', step: '0.1' },
          { id: 'exhaust_exp', label: 'POINT_0_EXP', default: '1', type: 'number', step: '0.1' },
          { id: 'exhaust_scale', label: 'POINT_0_SCALE (x, y, z)', default: '0.35, 0.35, 0.3' },
        ]
      },
    ]
  },
  // ─── 4. Underside ───
  {
    id: 'underside',
    title: 'Underside Darkening',
    desc: 'Darken materials on the underside of the car.',
    sections: [
      {
        id: 'underside_dark',
        question: 'Do you want Underside Darkening?',
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
    desc: 'Add a tire smoke collider mesh.',
    sections: [
      {
        id: 'smoke_collider',
        question: 'Do you want a Smoke Collider?',
        fields: [
          { id: 'collider_mesh', label: 'Collider Mesh', hint: 'Mesh name for tire smoke collision', paste: true },
        ]
      },
    ]
  },
  // ─── 6. Carpaint ───
  {
    id: 'carpaint',
    title: 'Carpaint',
    desc: 'Apply CSP carpaint material shader.',
    sections: [
      {
        id: 'carpaint_mat',
        question: 'Do you want CSP Carpaint?',
        fields: [
          { id: 'carpaint_material', label: 'Carpaint Material', hint: 'Main body paint material name', paste: true },
        ]
      },
    ]
  },
  // ─── 7. Damage ───
  {
    id: 'damage',
    title: 'Car Damage Textures',
    desc: 'Damage, dust, and dirt shader replacement.',
    sections: [
      {
        id: 'damage_tex',
        question: 'Do you want Car Damage Textures?',
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
  // ─── 9. Rim/Paint Textures ───
  {
    id: 'rim_textures',
    title: 'Rim & Paint Textures',
    desc: 'Gold rims, silver rims, painted texture, and exterior chrome materials.',
    sections: [
      {
        id: 'gold_rims',
        question: 'Do you want Gold Rim texture?',
        fields: [
          { id: 'gold_rim_mats', label: 'Gold Rim Material(s)', hint: 'Material name for gold-colored rims', paste: true },
        ]
      },
      {
        id: 'silver_rims',
        question: 'Do you want Silver Rim texture?',
        fields: [
          { id: 'silver_rim_mats', label: 'Silver Rim Material(s)', hint: 'Material name for silver-colored rims', paste: true },
        ]
      },
      {
        id: 'painted_tex',
        question: 'Do you want a Painted Texture replacement?',
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
  // ─── 10. Tyre Shader ───
  {
    id: 'tyre_shader',
    title: 'Tyre Shader',
    desc: 'Tyre material properties and rubber look.',
    sections: [
      {
        id: 'tyre_shader_mat',
        question: 'Do you want Tyre Shader replacement?',
        fields: [
          { id: 'tyre_shader_materials', label: 'Tyre Material(s)', default: '21 - Default, Tyre.001, TIRE, Tyre_Stock, Tyre_Pro, Tyre_Thicc, Tyre, Tyres, TYRE, TIRE, TYRES', paste: true },
        ]
      },
    ]
  },
  // ─── 11. TyresFX Custom Textures ───
  {
    id: 'tyresfx_tex',
    title: 'TyresFX Custom Textures',
    desc: 'Custom tire textures per compound (ksTyresFX shader).',
    sections: [
      {
        id: 'tyresfx_custom',
        question: 'Do you want TyresFX Custom Textures?',
        fields: [
          { id: 'tyresfx_mat', label: 'Tyre Material(s) for ksTyresFX', default: '21 - Default, Tyre.001, Tyre_Stock, Tyre_Pro, Tyre_Thicc', paste: true },
          { id: 'tyresfx_0_path', label: 'Compound 0 Texture Path', default: '/../../parts/tyre/Federal_595RS_white_letter/', hint: 'Folder containing tyre1.dds and tyre1_NM.dds' },
          { id: 'tyresfx_1_path', label: 'Compound 1 Texture Path', default: '/../../parts/tyre/Federal_595RS_white_letter/' },
          { id: 'tyresfx_2_path', label: 'Compound 2 Texture Path', default: '/../../parts/tyre/Federal_595RS_white_letter/' },
          { id: 'tyresfx_3_path', label: 'Compound 3 Texture Path', default: '/../../parts/tyre/KendaKR20A/' },
          { id: 'tyresfx_4_path', label: 'Compound 4 Texture Path', default: '/../../parts/tyre/KendaKR20A/' },
          { id: 'tyresfx_5_path', label: 'Compound 5 Texture Path', default: '/../../parts/tyre/KendaKR20A/' },
          { id: 'tyresfx_6_path', label: 'Compound 6 Texture Path', default: '/../../parts/tyre/Armstrong_BluTracHP/' },
          { id: 'tyresfx_7_path', label: 'Compound 7 Texture Path', default: '/../../parts/tyre/accelera_651/' },
        ]
      },
    ]
  },
  // ─── 12. Driver ───
  {
    id: 'driver',
    title: 'Driver Model & Textures',
    desc: 'Custom driver suit, gloves, helmet, and 3D model.',
    sections: [
      {
        id: 'driver_suit',
        question: 'Do you want custom Driver Suit?',
        fields: [
          { id: 'suit_diff', label: 'Suit Diffuse Path', default: '/../../parts/Driver/2016_Suit_DIFF.dds' },
          { id: 'suit_nm', label: 'Suit Normal Map Path', default: '/../../parts/Driver/2016_Suit_NM.dds' },
        ]
      },
      {
        id: 'driver_gloves',
        question: 'Do you want custom Driver Gloves?',
        fields: [
          { id: 'gloves_diff', label: 'Gloves Diffuse Path', default: '/../../parts/Driver/2016_Gloves_DIFF.dds' },
          { id: 'gloves_nm', label: 'Gloves Normal Map Path', default: '/../../parts/Driver/2016_Gloves_nm.dds' },
        ]
      },
      {
        id: 'driver_helmet',
        question: 'Do you want custom Driver Helmet?',
        fields: [
          { id: 'helmet_diff', label: 'Helmet Diffuse Path', default: '/../../parts/Driver/HELMET_2012.dds' },
          { id: 'helmet_glass_diff', label: 'Helmet Glass Diffuse', default: '/../../parts/Driver/Helmet_2012_Glass.dds' },
          { id: 'helmet_map', label: 'Helmet Maps', default: '/../../parts/Driver/HELMET_2012_map.dds' },
        ]
      },
      {
        id: 'driver_3d',
        question: 'Do you want a custom Driver 3D Model?',
        fields: [
          { id: 'driver_kn5', label: 'Driver KN5 Path', default: '/../../parts/Driver/Bare_Hands.kn5' },
          { id: 'driver_pos', label: 'Position (x, y, z)', default: '0.0, 0.0, 0.0' },
        ]
      },
    ]
  },
  // ─── 13. Steering Wheel ───
  {
    id: 'steering',
    title: 'Steering Wheel',
    desc: 'Custom steering wheel model and textures.',
    sections: [
      {
        id: 'steer_model',
        question: 'Do you want a custom Steering Wheel model?',
        fields: [
          { id: 'steer_kn5', label: 'Steering Wheel KN5', default: '/../../parts/Steering Wheels/vertex_wheel.kn5' },
          { id: 'steer_insert_after', label: 'Insert After (mesh)', default: 'COCKPIT_HR' },
          { id: 'steer_hide', label: 'Hide Original Mesh(es)', hint: 'Comma-separated mesh names to hide', paste: true },
          { id: 'steer_scale', label: 'Scale (x, y, z)', default: '1.0, 1.0, 1.0' },
          { id: 'steer_rotation', label: 'Rotation (x, y, z)', default: '0.0, 0.0, 0.0' },
          { id: 'steer_offset', label: 'Offset (x, y, z)', default: '0, 0, 0' },
        ]
      },
      {
        id: 'steer_texture',
        question: 'Do you want custom Steering Wheel textures?',
        fields: [
          { id: 'steer_tex_mesh', label: 'Steering Wheel Mesh', hint: 'Mesh name in the car kn5', paste: true },
          { id: 'steer_tex_mat', label: 'Material Name', default: '01 - Default.001', paste: true },
          { id: 'steer_tex_diff', label: 'Diffuse Path', default: '/../../parts/Steering Wheels/wheel.dds' },
          { id: 'steer_tex_nm', label: 'Normal Map Path', default: '/../../parts/Steering Wheels/wheel_nm.dds' },
          { id: 'steer_tex_maps', label: 'Maps Path', default: '/../../parts/Steering Wheels/wheel_Map.dds' },
          { id: 'steer_tex_detail', label: 'Detail Path', default: '/../../parts/Steering Wheels/wheel.dds' },
        ]
      },
    ]
  },
  // ─── 14. Custom Rims ───
  {
    id: 'rims',
    title: 'Custom Rims',
    desc: 'Replace front and rear rim models.',
    sections: [
      {
        id: 'custom_rims',
        question: 'Do you want Custom Rims?',
        fields: [
          { id: 'rim_file', label: 'Car KN5 File(s)', hint: 'Car kn5s including LoD kn5s — comma separated', paste: true },
          { id: 'rim_front_orig', label: 'Front Original Rim Meshes', hint: 'CM Showroom — click each rim part, copy mesh name', paste: true },
          { id: 'rim_front_kn5', label: 'Front Rim KN5 Path', default: '/../../parts/rims/__________________.kn5', paste: true },
          { id: 'rim_front_radius', label: 'Front Rim Radius', default: '0.22', type: 'number', step: '0.001' },
          { id: 'rim_front_width', label: 'Front Rim Width', default: '0.21', type: 'number', step: '0.001' },
          { id: 'rim_front_offset', label: 'Front Offset (x, y)', default: '0.00, 0.00', hint: '(-) inward, (+) outward' },
          { id: 'rim_rear_orig', label: 'Rear Original Rim Meshes', paste: true },
          { id: 'rim_rear_kn5', label: 'Rear Rim KN5 Path', default: '/../../parts/rims/__________________.kn5', paste: true },
          { id: 'rim_rear_radius', label: 'Rear Rim Radius', default: '0.218', type: 'number', step: '0.001' },
          { id: 'rim_rear_width', label: 'Rear Rim Width', default: '0.205', type: 'number', step: '0.001' },
          { id: 'rim_rear_offset', label: 'Rear Offset (x, y)', default: '0.00, 0.00', hint: '(-) inward, (+) outward' },
        ]
      },
    ]
  },
  // ─── 15. Tire Replacement ───
  {
    id: 'tires',
    title: 'Tire Replacement',
    desc: 'Replace tire models (front and rear).',
    sections: [
      {
        id: 'tire_replace',
        question: 'Do you want Tire Replacement?',
        fields: [
          { id: 'tire_file', label: 'Car KN5 File(s)', paste: true },
          { id: 'tire_front_orig', label: 'Front Original Tire Meshes', paste: true },
          { id: 'tire_front_kn5', label: 'Front Tire KN5 Path', default: '/../../parts/tyre/Tyre_XXX.kn5', paste: true },
          { id: 'tire_front_radius', label: 'Front Tire Radius', default: '0.230', type: 'number', step: '0.001' },
          { id: 'tire_front_width', label: 'Front Tire Width', default: '0.185', type: 'number', step: '0.001' },
          { id: 'tire_front_offset', label: 'Front Offset (x, y)', default: '-0.0, -0.02' },
          { id: 'tire_rear_orig', label: 'Rear Original Tire Meshes', paste: true },
          { id: 'tire_rear_kn5', label: 'Rear Tire KN5 Path', default: '/../../parts/tyre/Tyre_XXX.kn5', paste: true },
          { id: 'tire_rear_radius', label: 'Rear Tire Radius', default: '0.230', type: 'number', step: '0.001' },
          { id: 'tire_rear_width', label: 'Rear Tire Width', default: '0.185', type: 'number', step: '0.001' },
          { id: 'tire_rear_offset', label: 'Rear Offset (x, y)', default: '-0.0, -0.02' },
        ]
      },
    ]
  },
  // ─── 16. Brake FX ───
  {
    id: 'brakes',
    title: 'Brake FX',
    desc: 'Brake caliper paint, hardware, and disc effects.',
    sections: [
      {
        id: 'caliper_paint',
        question: 'Do you want Brake Caliper Paint?',
        fields: [
          { id: 'caliper_paint_mat', label: 'Caliper Paint Material', default: 'EXT_CaliperHatPaint', paste: true },
        ]
      },
      {
        id: 'caliper_hardware',
        question: 'Do you want Brake Caliper Hardware (metallic)?',
        fields: [
          { id: 'caliper_hw_mat', label: 'Caliper Hardware Material', default: 'EXT_CaliperHardware', paste: true },
        ]
      },
      {
        id: 'brake_disc',
        question: 'Do you want Brake Disc FX?',
        fields: [
          { id: 'brake_ceramic', label: 'Ceramic Look', type: 'choice', choices: [
            { value: '1', label: 'Yes' }, { value: '0', label: 'No' }
          ], default: '1' },
          { id: 'brake_carved', label: 'Carved Lines', type: 'choice', choices: [
            { value: '1', label: 'Yes' }, { value: '0', label: 'No' }
          ], default: '0' },
          { id: 'brake_carved_freq', label: 'Carved Frequency', default: '20', type: 'number', step: '1' },
          { id: 'brake_glow_offset', label: 'Glow Offset', default: '1.5', type: 'number', step: '0.1' },
          { id: 'brake_int_radius', label: 'Disc Internal Radius', default: '0.1', type: 'number', step: '0.01' },
          { id: 'brake_radius', label: 'Disc Radius', default: '0.16383', type: 'number', step: '0.001' },
          { id: 'brake_wear', label: 'Wear Force', default: '0.45', type: 'number', step: '0.05' },
        ]
      },
    ]
  },
  // ─── 17. Exhaust Flames ───
  {
    id: 'flames',
    title: 'Exhaust Flames',
    desc: 'Backfire flames — antilag, discharge, flat shift, limiter.',
    sections: [
      {
        id: 'exhaust_flames',
        question: 'Do you want Exhaust Flames?',
        fields: [
          { id: 'flame_antilag', label: 'Antilag', type: 'choice', choices: [
            { value: '1', label: 'Yes' }, { value: '0', label: 'No' }
          ], default: '1' },
          { id: 'flame_antilag_delay', label: 'Antilag Delay (seconds)', default: '0.0', type: 'number', step: '0.1' },
          { id: 'flame_antilag_intensity', label: 'Antilag Intensity', default: '1', type: 'number', step: '0.1' },
          { id: 'flame_discharge', label: 'Discharge (throttle lift)', type: 'choice', choices: [
            { value: '1', label: 'Yes' }, { value: '0', label: 'No' }
          ], default: '1' },
          { id: 'flame_discharge_charge', label: 'Discharge Charge Time', default: '0.1', type: 'number', step: '0.05' },
          { id: 'flame_discharge_duration', label: 'Discharge Duration', default: '0.250', type: 'number', step: '0.05' },
          { id: 'flame_discharge_prob', label: 'Discharge Probability', default: '0.25', type: 'number', step: '0.05', hint: '0-1 (0=never, 1=always)' },
          { id: 'flame_discharge_intensity', label: 'Discharge Intensity', default: '0.5', type: 'number', step: '0.1' },
          { id: 'flame_flatshift', label: 'Flat Shift', type: 'choice', choices: [
            { value: '1', label: 'Yes' }, { value: '0', label: 'No' }
          ], default: '1' },
          { id: 'flame_flatshift_duration', label: 'Flat Shift Duration', default: '0.25', type: 'number', step: '0.05' },
          { id: 'flame_flatshift_gas', label: 'Flat Shift Gas Threshold', default: '75', type: 'number', step: '5' },
          { id: 'flame_flatshift_intensity', label: 'Flat Shift Intensity', default: '0.65', type: 'number', step: '0.05' },
          { id: 'flame_limiter', label: 'Limiter', type: 'choice', choices: [
            { value: '1', label: 'Yes' }, { value: '0', label: 'No' }
          ], default: '1' },
          { id: 'flame_limiter_intensity', label: 'Limiter Intensity', default: '0.15', type: 'number', step: '0.05' },
        ]
      },
    ]
  },
  // ─── 18. Particles FX ───
  {
    id: 'particles',
    title: 'Particles FX',
    desc: 'Smoke, sparks, and tire particle effects.',
    sections: [
      {
        id: 'particles_fx',
        question: 'Do you want custom Particles FX?',
        fields: [
          { id: 'pfx_smoke_color', label: 'Smoke Color (R, G, B)', default: '43, 100, 130' },
          { id: 'pfx_smoke_thickness', label: 'Smoke Force Thickness', default: '0.0', type: 'number', step: '0.1' },
          { id: 'pfx_sparks_mult', label: 'Sparks Amount Multiplier', default: '2', type: 'number', step: '0.5' },
          { id: 'pfx_body_sparks', label: 'Body Sparks Amount', default: '0.25', type: 'number', step: '0.05' },
          { id: 'pfx_smoke_block_start', label: 'Smoke Block Start', default: '0.4', type: 'number', step: '0.1' },
          { id: 'pfx_smoke_block_end', label: 'Smoke Block End', default: '0.6', type: 'number', step: '0.1' },
        ]
      },
    ]
  },
  // ─── 19. TyresFX Flex ───
  {
    id: 'tyresfx_flex',
    title: 'TyresFX Flex',
    desc: 'Tire flex and deformation visuals (front/rear).',
    sections: [
      {
        id: 'tyresfx_flex_cfg',
        question: 'Do you want TyresFX Flex settings?',
        fields: [
          { id: 'tfx_front_profile', label: 'Front Flex Profile Mult', default: '0.45', type: 'number', step: '0.05' },
          { id: 'tfx_front_skew_range', label: 'Front Skew Range Mult', default: '3', type: 'number', step: '0.5' },
          { id: 'tfx_rear_profile', label: 'Rear Flex Profile Mult', default: '1.25', type: 'number', step: '0.05' },
          { id: 'tfx_rear_skew_range', label: 'Rear Skew Range Mult', default: '3', type: 'number', step: '0.5' },
        ]
      },
    ]
  },
  // ─── 20. Underglow ───
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
  // ─── 21. Emissive ───
  {
    id: 'emissive',
    title: 'Emissive Extras / Invisible Parts',
    desc: 'Glowing elements and toggle-visibility parts.',
    sections: [
      {
        id: 'emissive_extra',
        question: 'Do you want Emissive Extras?',
        fields: [
          { id: 'emissive_name', label: 'Emissive Name/Mesh', paste: true },
          { id: 'emissive_color', label: 'COLOR (r, g, b)', default: '1, 0, 0' },
          { id: 'emissive_location', label: 'Location', type: 'choice', choices: [
            { value: 'FRONT', label: 'Front' },
            { value: 'REAR', label: 'Rear' },
          ], default: 'FRONT' },
        ]
      },
    ]
  },
  // ─── 22. Physics & FFB ───
  {
    id: 'physics',
    title: 'Physics & FFB',
    desc: 'Extended physics, FFB tweaks, soft lock — rarely changed defaults.',
    sections: [
      {
        id: 'physics_ffb',
        question: 'Do you want Physics & FFB config? (recommended defaults)',
        fields: [
          { id: 'stalled_rpm', label: 'Engine Stalled RPM Threshold', default: '750', type: 'number', step: '50' },
          { id: 'softlock_padding', label: 'Soft Lock Padding', default: '10', type: 'number', step: '1' },
          { id: 'bounding_sphere', label: 'Bounding Sphere Radius', default: '3', type: 'number', step: '0.5' },
        ]
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

    let html = `<h2>${step.title}</h2><p class="step-desc">${step.desc}</p>`;

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
      html += `<div class="fields" id="fields-${sec.id}">`;
      html += renderFields(sec.fields, sec.id, 0);
      if (sec.repeater) {
        html += `<div id="repeater-${sec.id}"></div>`;
        html += `<button class="repeater-add" onclick="addRepeat('${sec.id}')">${sec.repeatLabel || '+ Add Another'}</button>`;
      }
      html += `</div></div>`;
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
  const fields = document.getElementById(`fields-${secId}`);
  fields.classList.toggle('open', enabled);
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
      input.style.borderColor = 'var(--green)';
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
  entry.innerHTML = `<strong>Exhaust #${idx + 1}</strong>` + renderFields(step.fields, secId, idx);
  container.appendChild(entry);
};

// ─── Navigation ───
function showStep(idx) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(`step-${idx}`);
  if (el) el.classList.add('active');
  document.getElementById('btn-prev').disabled = idx === 0;
  const isLast = idx === STEPS.length - 1;
  document.getElementById('btn-next').textContent = isLast ? '🔧 Generate' : 'Next →';
  document.getElementById('step-indicator').textContent = `${idx + 1} / ${STEPS.length}`;
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

  // ── Audio ──
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
    L('; Underside of car (Dark areas)');
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

  // ── Rim/Paint Textures ──
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

  // ── Tyre Shader ──
  if (state.tyre_shader_mat?.enabled) {
    L(SEP);
    L('; Tyres');
    L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${state.tyre_shader_mat.values.tyre_shader_materials}`);
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
  }

  // ── Driver ──
  if (state.driver_suit?.enabled) {
    L(SEP);
    L('; Driver Suit');
    L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L('MESHES = DRIVER:suit');
    L('MATERIALS = RT_DriverSuit');
    L('SHADER = ksSkinnedMesh_NMDetaill');
    L('RESOURCE_0 = txDiffuse');
    L(`RESOURCE_FILE_0 =${state.driver_suit.values.suit_diff}`);
    L('RESOURCE_1 = txNormal');
    L(`RESOURCE_FILE_1 =${state.driver_suit.values.suit_nm}`);
    L();
  }

  if (state.driver_gloves?.enabled) {
    L('[SHADER_REPLACEMENT_...]');
    L('MESHES = DRIVER:Gloves');
    L('MATERIALS = RT_Gloves');
    L('SHADER = ksSkinnedMesh_NMDetaill');
    L('RESOURCE_0 = txDiffuse');
    L(`RESOURCE_FILE_0 =${state.driver_gloves.values.gloves_diff}`);
    L('RESOURCE_1 = txNormal');
    L(`RESOURCE_FILE_1 =${state.driver_gloves.values.gloves_nm}`);
    L();
  }

  if (state.driver_helmet?.enabled) {
    L('[SHADER_REPLACEMENT_...]');
    L('MATERIALS = RT_HELMET_Glass');
    L('SHADER = ksPerPixelMultiMap');
    L('RESOURCE_0 = txDiffuse');
    L(`RESOURCE_FILE_0 =${state.driver_helmet.values.helmet_glass_diff}`);
    L('RESOURCE_1 = txNormal');
    L('RESOURCE_FILE_1 =/../../parts/Driver/flat_nm.dds');
    L('RESOURCE_2 = txMaps');
    L(`RESOURCE_FILE_2 =${state.driver_helmet.values.helmet_map}`);
    L('RESOURCE_3 = txDetail');
    L('RESOURCE_FILE_3 =null.dds');
    L();
    L('[SHADER_REPLACEMENT_...]');
    L('MESHES = DRIVER:HELMET_SUB0');
    L('MATERIALS = RT_Helemt');
    L('SHADER = ksPerPixelMultiMap');
    L('RESOURCE_0 = txDiffuse');
    L(`RESOURCE_FILE_0 =${state.driver_helmet.values.helmet_diff}`);
    L('RESOURCE_1 = txNormal');
    L('RESOURCE_FILE_1 =/../../flat_nm.dds');
    L();
  }

  if (state.driver_3d?.enabled) {
    L('[DRIVER3D_MODEL]');
    L(`NAME=${state.driver_3d.values.driver_kn5}`);
    L(`POSITION=${state.driver_3d.values.driver_pos}`);
    L();
  }

  // ── Steering Wheel ──
  if (state.steer_model?.enabled) {
    L(SEP);
    L('; Steering Wheel');
    L(SEP);
    L('[MODEL_REPLACEMENT_...]');
    L('FILE = car.kn5');
    L(`INSERT = ${state.steer_model.values.steer_kn5}`);
    L(`INSERT_AFTER = ${state.steer_model.values.steer_insert_after}`);
    L(`HIDE = ${state.steer_model.values.steer_hide || ''}`);
    L(`SCALE = ${state.steer_model.values.steer_scale}`);
    L(`ROTATION = ${state.steer_model.values.steer_rotation}`);
    L(`OFFSET = ${state.steer_model.values.steer_offset}`);
    L();
  }

  if (state.steer_texture?.enabled) {
    const v = state.steer_texture.values;
    L('[SHADER_REPLACEMENT_...]');
    L(`MESHES = ${v.steer_tex_mesh}`);
    L(`MATERIALS = ${v.steer_tex_mat}`);
    L('SHADER = ksPerPixelMultiMap');
    L('RESOURCE_0 = txDiffuse');
    L(`RESOURCE_FILE_0 =${v.steer_tex_diff}`);
    L('RESOURCE_1 = txNormal');
    L(`RESOURCE_FILE_1 =${v.steer_tex_nm}`);
    L('RESOURCE_2 = txMaps');
    L(`RESOURCE_FILE_2 =${v.steer_tex_maps}`);
    L('RESOURCE_3 = txDetail');
    L(`RESOURCE_FILE_3 =${v.steer_tex_detail}`);
    L();
  }

  // ── Includes before rims ──
  L('[INCLUDE: common/materials_interior.ini]');
  L('[INCLUDE: common/custom_rims.ini]');
  L();

  // ── Custom Rims ──
  if (state.custom_rims?.enabled) {
    const v = state.custom_rims.values;
    L(SEP);
    L('; Custom Rims');
    L(SEP);
    L('[ReplaceRims]');
    L(`File = ${v.rim_file}`);
    L(`OriginalRims = ${v.rim_front_orig}`);
    L(`Model = ${v.rim_front_kn5} , ${v.rim_front_radius}, ${v.rim_front_width}`);
    L(`Offset = ${v.rim_front_offset}`);
    L('FrontOnly=1');
    L();
    L('[ReplaceRims]');
    L(`File = ${v.rim_file}`);
    L(`OriginalRims = ${v.rim_rear_orig}`);
    L(`Model = ${v.rim_rear_kn5} , ${v.rim_rear_radius}, ${v.rim_rear_width}`);
    L(`Offset = ${v.rim_rear_offset}`);
    L('RearOnly=1');
    L();
  }

  // ── Tire Replacement ──
  if (state.tire_replace?.enabled) {
    const v = state.tire_replace.values;
    L(SEP);
    L('; Tire Replacement');
    L(SEP);
    L('[ReplaceRims]');
    L(`File = ${v.tire_file}`);
    if (v.tire_front_orig) L(`OriginalRims = ${v.tire_front_orig}`);
    L(`Model = ${v.tire_front_kn5} , ${v.tire_front_radius}, ${v.tire_front_width}`);
    L(`Offset = ${v.tire_front_offset}`);
    L('FrontOnly=1');
    L();
    L('[ReplaceRims]');
    L(`File = ${v.tire_file}`);
    if (v.tire_rear_orig) L(`OriginalRims = ${v.tire_rear_orig}`);
    L(`Model = ${v.tire_rear_kn5} , ${v.tire_rear_radius}, ${v.tire_rear_width}`);
    L(`Offset = ${v.tire_rear_offset}`);
    L('RearOnly=1');
    L();
  }

  // ── TyresFX Custom Textures ──
  if (state.tyresfx_custom?.enabled) {
    const v = state.tyresfx_custom.values;
    L(SEP);
    L('; TyresFX Custom Textures');
    L(SEP);
    L('[SHADER_REPLACEMENT_...]');
    L(`MATERIALS = ${v.tyresfx_mat}`);
    L('SHADER = ksTyresFX');
    L();
    for (let i = 0; i <= 7; i++) {
      const path = v[`tyresfx_${i}_path`] || '';
      L(`[TYRES_FX_CUSTOMTEXTURE_${i}]`);
      // Determine file names based on path
      const isAccelera = path.includes('accelera');
      const isArmstrong = path.includes('Armstrong');
      if (isAccelera) {
        L(`TXDIFFUSE = ${path}tyre.dds`);
        L(`TXBLUR = ${path}tyre_blur.dds`);
        L(`TXDIRT = ${path}dirt.dds`);
        L(`TXNORMAL = ${path}tyre_nm.dds`);
        L(`TXNORMALBLUR = ${path}tyre_blur_nm.dds`);
      } else if (isArmstrong) {
        L(`TXDIFFUSE = ${path}tyre.dds`);
        L(`TXBLUR = ${path}tyre.dds`);
        L(`TXDIRT = ${path}tyre_dirt.dds`);
        L(`TXNORMAL = ${path}tyre_nm.dds`);
        L(`TXNORMALBLUR = ${path}tyre_nm.dds`);
      } else if (path.includes('Federal') || path.includes('white_letter')) {
        L(`TXDIFFUSE = ${path}tyre1.dds`);
        L(`TXBLUR = ${path}tyre1.dds`);
        L(`TXNORMAL = ${path}tyre1_NM.dds`);
        L(`TXNORMALBLUR = ${path}tyre1_NM.dds`);
      } else {
        L(`TXDIFFUSE = ${path}tyre.dds`);
        L(`TXBLUR = ${path}tyre.dds`);
        L(`TXNORMAL = ${path}tyre_nm.dds`);
        L(`TXNORMALBLUR = ${path}tyre_nm.dds`);
      }
      L();
    }
  }

  // ── Brake FX ──
  if (state.caliper_paint?.enabled) {
    L(SEP);
    L('; Brake Caliper Paint');
    L(SEP);
    L('[Material_CarPaint_Metallic]');
    L(`Materials = ${state.caliper_paint.values.caliper_paint_mat}`);
    L('NormalsMode = BASIC');
    L('ClearCoatThickness = 0.1');
    L('SpecularColor = 1');
    L('SpecularMult = 1.25');
    L('FresnelMax = 0.5');
    L('FresnelC = 0.14');
    L('BrightnessAdjustment = 0.55');
    L();
  }

  if (state.caliper_hardware?.enabled) {
    L('[Material_Aluminium_v2]');
    L(`Materials= ${state.caliper_hardware.values.caliper_hw_mat}`);
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
  }

  if (state.brake_disc?.enabled) {
    const v = state.brake_disc.values;
    L('[BRAKEDISC_FX]');
    L('ACTIVE = 1');
    L(`CERAMIC = ${v.brake_ceramic}`);
    L(`CARVED = ${v.brake_carved}`);
    L(`CARVED_FREQUENCY = ${v.brake_carved_freq}`);
    L(`GLOW_OFFSET = ${v.brake_glow_offset}`);
    L('DEBUG = 0');
    L(`DISC_INTERNAL_RADIUS = ${v.brake_int_radius}`);
    L(`DISC_RADIUS = ${v.brake_radius}`);
    L(`WEAR_FORCE = ${v.brake_wear}`);
    L('GLOW_FORCE = 0');
    L();
  }

  // ── Exhaust Flames ──
  if (state.exhaust_flames?.enabled) {
    const v = state.exhaust_flames.values;
    L(SEP);
    L('; Exhaust Flames');
    L(SEP);
    L('[EXHAUST_FLAMES]');
    L(`ANTILAG=${v.flame_antilag}`);
    L(`ANTILAG_DELAY=${v.flame_antilag_delay}`);
    L(`ANTILAG_INTENSITY=${v.flame_antilag_intensity}`);
    L('ANTILAG_TURBO_THRESHOLD=0');
    L('DAMAGE=1');
    L('DAMAGE_DURATION=1.00');
    L('DAMAGE_INTENSITY=1');
    L('DAMAGE_PROBABILITY=1');
    L(`DISCHARGE=${v.flame_discharge}`);
    L(`DISCHARGE_CHARGE_TIME=${v.flame_discharge_charge}`);
    L('DISCHARGE_DELAY=0');
    L(`DISCHARGE_DURATION=${v.flame_discharge_duration}`);
    L(`DISCHARGE_PROBABILITY=${v.flame_discharge_prob}`);
    L(`DISCHARGE_INTENSITY=${v.flame_discharge_intensity}`);
    L('DISCHARGE_WATER_TEMPERATURE_THRESHOLD=70');
    L(`FLAT_SHIFT=${v.flame_flatshift}`);
    L('FLAT_SHIFT_COOLDOWN=0');
    L(`FLAT_SHIFT_DURATION=${v.flame_flatshift_duration}`);
    L(`FLAT_SHIFT_GAS_THRESHOLD=${v.flame_flatshift_gas}`);
    L(`FLAT_SHIFT_INTENSITY=${v.flame_flatshift_intensity}`);
    L('FLAT_SHIFT_PROBABILITY=1');
    L(`LIMITER=${v.flame_limiter}`);
    L('LIMITER_DELAY=0');
    L(`LIMITER_INTENSITY=${v.flame_limiter_intensity}`);
    L();
    L('[LIGHT_FLAMES]');
    L('CAR_BRIGHTNESS_MULT=0,9');
    L('OFFSET_DIR=0,15');
    L('OFFSET_POS=0,25');
    L('SPOT=300');
    L();
  }

  // ── Emissive ──
  if (state.emissive_extra?.enabled) {
    const v = state.emissive_extra.values;
    L(SEP);
    L('; Emissive Extras');
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

  // ── Particles FX ──
  if (state.particles_fx?.enabled) {
    const v = state.particles_fx.values;
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
    L(`BODY_SPARKS_AMOUNT=${v.pfx_body_sparks}`);
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
    L(`SPARKS_AMOUNT_MULT=${v.pfx_sparks_mult}`);
    L('SPARKS_COOLDOWN_LAG=0.96');
    L('SPARKS_DEPTH_EXP=4');
    L('SPARKS_MAX_DEPTH=0.0025');
    L('SPARKS_OVERLOAD_LAG=0.7');
    L("TRACES_LIGHTS_POS='0.658934, 0.739916, -2.08433'");
    L('TRACES_LIGHTS_SIZE=-1');
    L(`SMOKE_BLOCK_START = ${v.pfx_smoke_block_start}`);
    L(`SMOKE_BLOCK_END = ${v.pfx_smoke_block_end}`);
    L(`SMOKE_COLOR = ${v.pfx_smoke_color}`);
    L(`SMOKE_FORCE_THICKNESS = ${v.pfx_smoke_thickness}`);
    L();
  }

  // ── TyresFX Flex ──
  if (state.tyresfx_flex_cfg?.enabled) {
    const v = state.tyresfx_flex_cfg.values;
    L(SEP);
    L('; TyresFX Flex');
    L(SEP);
    L('[TYRES_FX_FRONT]');
    L('ENABLED=1');
    L('FLEX_MAX_SKEW_MULT=1.1');
    L('FLEX_MULT=1');
    L(`FLEX_PROFILE_MULT=${v.tfx_front_profile}`);
    L(`FLEX_SKEW_RANGE_MULT=${v.tfx_front_skew_range}`);
    L('FLEX_SKEW_SMOOTHING=0.1');
    L('FLEX_SQUASH_SMOOTHING=1.1');
    L('NOFX_DISTANCE_SWITCH=40');
    L('VISIBLE_IN_INTERIOR_CAM=1');
    L();
    L('[TYRES_FX_REAR]');
    L('ENABLED=1');
    L('FLEX_MAX_SKEW_MULT=1.1');
    L('FLEX_MULT=1');
    L(`FLEX_PROFILE_MULT=${v.tfx_rear_profile}`);
    L(`FLEX_SKEW_RANGE_MULT=${v.tfx_rear_skew_range}`);
    L('FLEX_SKEW_SMOOTHING=0.1');
    L('FLEX_SQUASH_SMOOTHING=0.1');
    L('NOFX_DISTANCE_SWITCH=40');
    L('VISIBLE_IN_INTERIOR_CAM=1');
    L();
  }

  // ── Underglow ──
  if (state.underglow_lights?.enabled) {
    const v = state.underglow_lights.values;
    const blinking = v.ug_blinking === '1';
    const blinkLine = blinking ? '\nBLINKING_PATTERN=(0=1|1=0|2=1|3=0|4=1|5=0|6=1|7=0)\nBLINKING_DURATION=8' : '';
    L(SEP);
    L('; Underglow Lights');
    L(SEP);
    // Front
    L('[LIGHT_EXTRA_1]');
    L('LINE_FROM=-0.7, 0.20, -1.8');
    L('LINE_TO=0.7, 0.20, -1.8');
    L('BIND_TO_HEADLIGHTS=1');
    L(`COLOR_FROM=${v.ug_color_from}`);
    L(`COLOR_TO=${v.ug_color_to}`);
    L('DIFFUSE_CONCENTRATION=0.7');
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
    // Right side
    L('[LIGHT_EXTRA_2]');
    L('LINE_FROM=0.8, 0.20, 0.8');
    L('LINE_TO=0.8, 0.20, -0.8');
    L('BIND_TO_HEADLIGHTS=1');
    L(`COLOR_FROM=${v.ug_color_from}`);
    L(`COLOR_TO=${v.ug_color_to}`);
    L('DIFFUSE_CONCENTRATION=0.8');
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
    // Left side
    L('[LIGHT_EXTRA_3]');
    L('LINE_FROM=-0.8, 0.20, 0.8');
    L('LINE_TO=-0.8, 0.20, -0.8');
    L('BIND_TO_HEADLIGHTS=1');
    L(`COLOR_FROM=${v.ug_color_from}`);
    L(`COLOR_TO=${v.ug_color_to}`);
    L('DIFFUSE_CONCENTRATION=0.8');
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
    // Rear
    L('[LIGHT_EXTRA_4]');
    L('LINE_FROM=-0.7, 0.20, 2.0');
    L('LINE_TO=0.7, 0.20, 2.0');
    L('BIND_TO_HEADLIGHTS=1');
    L(`COLOR_FROM=${v.ug_color_from}`);
    L(`COLOR_TO=${v.ug_color_to}`);
    L('DIFFUSE_CONCENTRATION=0.8');
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
  }

  // ── Physics & FFB (rarely changed) ──
  if (state.physics_ffb?.enabled) {
    L(SEP);
    L('; Physics & FFB');
    L(SEP);
    const v = state.physics_ffb.values;
    L('[BASIC]');
    L('BRAKES_THRESHOLD = 0.01');
    L('LIGHT_DAMAGE_SPEED_MIN = 40');
    L('LIGHT_DAMAGE_SPEED_MAX = 120');
    L('IS_LOW_BEAM_AVAILABLE = 1');
    L('HEADLIGHTS_ARE_HEADLIGHTS = 1');
    L('STOP_LODS_ADJUSTMENT = 0');
    L('IGNORE_OTHER_CONFIGS = 0');
    L(`BOUNDING_SPHERE_RADIUS=${v.bounding_sphere}`);
    L(`ENGINE_STALLED_RPM_THRESHOLD=${v.stalled_rpm}`);
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
    L(`PADDING=${v.softlock_padding}`);
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
  }

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
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = '📋 Copy to Clipboard', 1500);
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
