
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

const BLOGS_DATABASE = {
    'knife-free-standard': {
      id: 'knife-free-standard',
      category: 'WRAP TECH • TECHNICAL WHITEPAPER',
      categoryIcon: 'fa-solid fa-scissors',
      title: 'Why 100% Knife-Free Tape is the Only Acceptable Standard on Factory Supercar Paint.',
      subtext: 'Even master wrapper hands slip with razor blades. Discover how aerospace-grade polymer filament tape completely eliminates metallic blades from our cleanroom bays, preserving millions in factory clearcoats.',
      date: 'October 04, 2026',
      readTime: '5 Min Read',
      author: 'Stefan Rossi',
      role: 'Lead Installation Specialist',
      avatar: 'assets/images/team-stefan.jpg',
      bio: 'Certified 3M Preferred Master with 11+ years in exotic supercar transformations. Pioneer of tension-relieved edge tucking and cleanroom thermography.',
      stat1Val: '480+',
      stat1Lbl: 'Supercars Wrapped',
      stat2Val: '100%',
      stat2Lbl: 'Blade-Zero Record',
      heroImg: 'assets/images/craft-detail.jpg',
      imgCaption: 'High-tensile Knifeless tape filament tracing OEM door jamb return inside Aureon Cleanroom Bay 1',
      quickSpecs: {
        topic: 'Vinyl Installation',
        cutting: 'Knifeless Filament Tape',
        safety: '100% Zero-Blade Contact',
        cureTemp: '95°C – 105°C IR',
        longevity: '5 to 7 Years'
      },
      leadPara: 'When commissioning a full color-transformation or bespoke track livery on an automotive masterpiece, the greatest hazard your vehicle faces is not stone chips on the highway—it is the utility blade held in the hand of an installer. Even among seasoned craftsmen, human hand control over a razor blade at a microscopic 0.05mm clearcoat depth is an anatomical impossibility across compound curvature panels.',
      para1: 'A single micro-score through the polyurethane clearcoat into factory basecoat initiates galvanic capillary corrosion. Moisture, environmental road salt, and ambient temperature swings seep into the incision. Over months of ownership, this leads to paint delamination, rust creep, and permanent reduction in vehicle auction resale valuation.',
      pullquote: 'We operate on a zero-compromise mandate: the day an installer brings a metal utility blade within a millimeter of your factory clearcoat is the day craftsmanship has surrendered to shortcuts.',
      pullquoteCite: '— Stefan Rossi, Aureon Master Installation Specialist',
      heading2: 'The Molecular Mechanics of Filament Cutting',
      para2: 'At Aureon Customs, our installation bays operate under an absolute Knife-Free Protocol. Instead of hand-trimming vinyl with disposable blades, our certified craftsmen map out panel edges, door sills, and aerodynamic seams using high-tensile ultra-fine polymer filament tape embedded underneath the vinyl.',
      para3: 'Once the cast vinyl is squeegeed over the filament tape, the technician pulls the internal aerospace-grade filament thread upward from beneath the film. The micro-filament shears the cast vinyl from the adhesive side outward. This leaves a surgically straight 90-degree cut with zero jagged serrations and zero paint contact.',
      inlineImg: 'assets/images/craft-detail.jpg',
      inlineCaption: 'Precision knifeless tape filament tracing seam contour around a carbon fiber rear diffuser.',
      calloutContent: 'Always request written confirmation of Knife-Free certification prior to commissioning any wrap shop. Ask to inspect the technician\'s cleanroom and verify that all trimming along headlights, taillights, and body seams is executed with embedded filament tape.',
      para4: 'To maintain the integrity of wrapped panels, we instruct all clients to observe a strict two-bucket hand-wash regimen utilizing pH-neutral car shampoos. Never bring a high-pressure wand closer than 18 inches to panel seams or door returns, and immediately blot away corrosive bird droppings or tree sap.',
      verdict: 'Knife-free tape technology represents the line of demarcation between high-volume commercial tint shops and master automotive ateliers. On supercars, exotics, and bespoke sports cars, cutting corners is simply not an option. Demand surgical precision, knife-free protocols, and written warranty certification.',
      faqs: [
        {
          q: 'Can razor blades ever be used safely during a professional wrap?',
          a: 'At Aureon Customs, razor blades are completely barred from coming into contact with painted vehicle bodywork. Blades may only be used on glass cutting tables to trim bulk rolls before film application. On the vehicle itself, every single cutline is executed strictly using embedded knifeless filament tape.'
        },
        {
          q: 'Does knife-free cutting leave jagged or uneven edges on curved panels?',
          a: 'No. Knifeless Design Line filament tape utilizes a proprietary high-tensile polymer wire that shears vinyl from beneath at microscopic tolerances. In fact, filament cuts follow bodylines with greater mathematical smoothness than hand-cut razor blades because the tape tracks panel contours naturally.'
        },
        {
          q: 'What happens when a wrapped car is eventually stripped after 5 years?',
          a: 'When high-grade cast vinyl is removed with controlled infrared heat by certified specialists, the cross-linked acrylic adhesive releases cleanly without residue. The underlying factory clearcoat is revealed in the exact condition it was in the day of wrap installation, completely free from UV fading or road rash.'
        },
        {
          q: 'Why is post-heating to 105°C essential on wrapped vehicle recesses?',
          a: 'Cast vinyl possesses crystalline memory of being cast flat. When stretched into concave bodylines or around door handles, it will eventually attempt to shrink back. Heating the film to its plasticizer threshold (95°C–105°C) resets its crystalline relaxation state, permanently locking the vinyl into its new shape.'
        }
      ]
    },

    'digital-to-carbon': {
      id: 'digital-to-carbon',
      category: 'LIVERY DESIGN • BESPOKE GRAPHICS',
      categoryIcon: 'fa-solid fa-palette',
      title: 'From Digital CAD to Carbon: Translating FIA Motorsport Heritage to Street Exotics.',
      subtext: 'How our livery architects map complex curves in 3D Blender models before printing, accounting for vinyl stretch dynamics across compound curved quarter panels and aerodynamic splitters.',
      date: 'September 28, 2026',
      readTime: '6 Min Read',
      author: 'Marcus Vance',
      role: 'Founder & Master Livery Director',
      avatar: 'assets/images/team-marcus.jpg',
      bio: 'Acclaimed livery architect with two decades creating bespoke liveries for IMSA, Le Mans, and private hypercar collectors worldwide.',
      stat1Val: '160+',
      stat1Lbl: 'Custom Liveries',
      stat2Val: '32',
      stat2Lbl: 'Podium Finishes',
      heroImg: 'assets/images/gallery-bmw-camo.jpg',
      imgCaption: 'Geometric shatter camouflage livery mapped onto BMW M3 track build using 3D CAD UV mapping',
      quickSpecs: {
        topic: 'Motorsport Livery',
        cutting: 'Laser & Filament Hybrid',
        safety: 'Zero Distortion UV Maps',
        cureTemp: '95°C Infrared Lock',
        longevity: '5 Years Outdoor'
      },
      leadPara: 'Designing a racing livery on flat two-dimensional design blueprints and attempting to wrap it onto an aggressive, three-dimensionally sculpted quarter panel always leads to catastrophic graphic distortion. Diagonal stripes buckle around fender flares, and sponsor logos warp unnaturally over wheel arches.',
      para1: 'At Aureon Customs, every livery commission commences with a high-density 3D optical laser scan of the client\'s chassis. We import these millimeter-accurate CAD surfaces into parametric 3D software to map graphics directly across curvature vectors before any physical vinyl is loaded onto our wide-format printers.',
      pullquote: 'A motorsport livery must respect the natural aerodynamic airflow of the machine. When design lines fight against body creases, the vehicle looks disjointed even at standstill.',
      pullquoteCite: '— Marcus Vance, Founder & Livery Director',
      heading2: 'Mathematical Stretch Compensation in Print Production',
      para2: 'When cast vinyl is manipulated around compound curves such as the rear haunches of a Porsche 911 GT3 RS, the material experiences localized elongation of 4% to 8%. Standard vector graphics printed flat will stretch proportionally, causing razor-thin accent pinstripes to distort into bloated bands.',
      para3: 'Our proprietary prepress software calculates the exact elongation percentage across every square centimeter of bodywork. The raster RIP engine pre-compresses the print file inversely so that when our master technicians stretch the film into position, the graphics snap into perfect mathematical alignment.',
      inlineImg: 'assets/images/gallery-bmw-camo.jpg',
      inlineCaption: 'Multi-layer metallic satin livery with UV-laminated scratch shield applied over carbon widebody haunches.',
      calloutContent: 'Never apply unlaminated digital prints on vehicles intended for track days or daily driving. Optically clear cast overlaminates protect delicate eco-solvent inks from fuel spillage, rubber clag, and harsh ultraviolet solar bleaching.',
      para4: 'Once applied, every printed seam is sealed with 3M Edge Sealer 3950 and heat-set to 95°C. This prevents high-velocity aerodynamic wind shear from getting beneath the graphic edges during high-speed track sessions in excess of 160 MPH.',
      verdict: 'True livery craftsmanship is the bridge where motorsport pedigree meets bespoke fine art. By utilizing laser chassis scans and mathematical stretch algorithms, Aureon Customs ensures that your livery looks as pristine in physical reality as it did in your digital dreams.',
      faqs: [
        {
          q: 'Can I design my own custom livery or do I have to pick from presets?',
          a: 'Every single livery created at Aureon is 100% bespoke and custom-designed from scratch. You work one-on-one with Marcus Vance to review 3D photorealistic renderings of your actual chassis until every sponsor logo, racing stripe, and color code meets your exact vision.'
        },
        {
          q: 'How does a printed wrap compare in durability to solid color-change vinyl?',
          a: 'Because we laminate our high-definition printed graphics with cast UV-blocking overlaminates (Avery DOL 1460Z or 3M 8518), our printed liveries match the 5-year outdoor durability and rock-chip resistance of solid color cast films.'
        },
        {
          q: 'Are liveries removable if I decide to return the car to factory spec?',
          a: 'Yes, 100%. All our livery films are multi-cast removable vinyls that strip away cleanly under controlled steam heat without harming your original clearcoat or leaving sticky adhesive residue.'
        },
        {
          q: 'Can you match factory OEM paint colors like Porsche Guards Red or BMW Isle of Man Green?',
          a: 'Yes. We utilize spectrophotometer color matching to replicate factory OEM paint codes in custom-printed or specialty metallic cast vinyl finishes with over 98% spectral accuracy.'
        }
      ]
    },

    'cfd-aero-science': {
      id: 'cfd-aero-science',
      category: 'AERODYNAMICS • COMPOSITE SCIENCE',
      categoryIcon: 'fa-solid fa-wind',
      title: 'Computational Fluid Dynamics: Balancing Front Splitters with Rear Downforce.',
      subtext: 'Why bolt-on wings without computational wind simulation induce high-speed aerodynamic imbalance, and how autoclave dry carbon achieves true ground effect downforce.',
      date: 'September 19, 2026',
      readTime: '8 Min Read',
      author: 'Elena Chen',
      role: 'Head of Aerodynamics & Composites',
      avatar: 'assets/images/team-elena.jpg',
      bio: 'Aerospace composite engineer specializing in computational fluid dynamics (CFD) and Toray pre-preg autoclave carbon fiber fabrication.',
      stat1Val: '1,200kg',
      stat1Lbl: 'Peak Downforce',
      stat2Val: 'Zero',
      stat2Lbl: 'Deflection Under Load',
      heroImg: 'assets/images/service-custom-mods.jpg',
      imgCaption: 'Toray 3K autoclave dry carbon splitter installation on McLaren 720S chassis mounting lugs',
      quickSpecs: {
        topic: 'Aerodynamics & Aero',
        cutting: '5-Axis CNC Waterjet',
        safety: 'OEM Chassis Anchored',
        cureTemp: '135°C Autoclave Cured',
        longevity: 'Lifetime Structural'
      },
      leadPara: 'In the automotive aftermarket, aerodynamic components are frequently marketed solely on visual aggression. However, when an unengineered carbon fiber front splitter or high-mounted rear wing is affixed to a supercar capable of exceeding 180 MPH, the resulting aerodynamic forces can drastically destabilize high-speed chassis balance.',
      para1: 'At 150 MPH, an aggressive GT wing can generate in excess of 400 kg of vertical downward force. If that downforce is not mathematically balanced by equal front-axle ground effect and splitter downforce, the vehicle experiences front-end aerodynamic lift, reducing front tire contact patches and inducing terrifying high-speed understeer.',
      pullquote: 'Real aerodynamics is not about creating the biggest spoiler; it is about managing the pressure delta between the top and bottom surfaces of the chassis without introducing crippling parasitic drag.',
      pullquoteCite: '— Elena Chen, Chief Aerodynamicist & Composite Engineer',
      heading2: 'Autoclave Pre-Preg Dry Carbon vs. Wet Fiberglass Replicas',
      para2: 'The vast majority of cheap aftermarket bodykits utilize wet-lay carbon, which consists of dry fiberglass backing brushed with polyester resin in an open room. Under heat and high-speed air pressure, these components warp, vibrate, crack, and fail at speed.',
      para3: 'Aureon Customs engineers all aerodynamic upgrades from 100% pre-impregnated (pre-preg) Toray carbon fiber cured inside high-pressure autoclaves at 135°C and 6 bars of pressure. This yields a resin-to-fiber ratio of 35:65, providing aircraft-grade tensile stiffness with zero structural deflection under maximum aero load.',
      inlineImg: 'assets/images/service-custom-mods.jpg',
      inlineCaption: 'Pre-preg carbon fiber rear diffuser with functional vertical strakes that evacuate air from beneath vehicle belly pan.',
      calloutContent: 'Never mount functional aerodynamic splitters into plastic bumper covers alone. High downforce loads will tear plastic mounting tabs right off the vehicle. All Aureon splitters utilize aircraft aluminum frame stanchions anchored directly to the vehicle chassis frame rails.',
      para4: 'Before any carbon package is released for street or track commissioning, we validate its pressure gradient using OpenFOAM and ANSYS Fluent CFD simulations, ensuring stable center-of-pressure coordinates through braking, cornering, and high-speed acceleration.',
      verdict: 'When operating in the upper echelons of automotive performance, aerodynamics is a science that demands absolute engineering rigor. Autoclave pre-preg dry carbon and chassis-anchored hardware ensure your car remains glued to tarmac at the limit.',
      faqs: [
        {
          q: 'Do carbon aero modifications actually generate noticeable downforce on track?',
          a: 'Yes. Our CFD-engineered pre-preg front splitters and swan-neck rear wings produce between 250 kg and 550 kg of usable downforce at 120 MPH, noticeably stabilizing high-speed corner entry and reducing braking distances.'
        },
        {
          q: 'Will installing a front splitter scrape on street driveways and speed bumps?',
          a: 'We design our street-spec aero packages with optimized approach angles and optional titanium skid pucks on the underside. We also integrate seamlessly with OEM front-axle lift systems.'
        },
        {
          q: 'What is the difference between dry carbon and wet carbon fiber?',
          a: 'Wet carbon is fiberglass with a thin top layer of carbon cloth soaked in heavy resin that yellows over time. Dry carbon is 100% pre-preg carbon cloth baked in an autoclave under vacuum and heat, resulting in 70% lighter weight and 300% higher rigidity.'
        },
        {
          q: 'Can you perform a full chrome delete along with aerodynamic mods?',
          a: 'Yes, our atelier frequently combines custom pre-preg carbon aero packages with gloss or satin black 3M 2080 chrome deletes around window surrounds, mirror stems, and exhaust tips for a unified aggressive aesthetic.'
        }
      ]
    },

    'self-healing-ppf': {
      id: 'self-healing-ppf',
      category: 'PAINT PROTECTION • MOLECULAR SCIENCE',
      categoryIcon: 'fa-solid fa-shield-halved',
      title: 'The Self-Healing Phenomenon: How Elastomeric PPF Erases Swirl Marks Under Sun.',
      subtext: 'An optical and physical analysis of thermoplastic polyurethane (TPU) memory polymers that reseal surface abrasions when exposed to ambient solar heat or warm water.',
      date: 'September 11, 2026',
      readTime: '5 Min Read',
      author: 'Lucas Miller',
      role: 'Master Detailer & PPF Specialist',
      avatar: 'assets/images/team-lucas.jpg',
      bio: 'Elite paint correction and film specialist certified across XPEL Ultimate and SunTek Reaction with 14 years atelier experience.',
      stat1Val: '8.5 mil',
      stat1Lbl: 'Armor Thickness',
      stat2Val: '99.8%',
      stat2Lbl: 'Optical Clarity',
      heroImg: 'assets/images/gallery-mclaren-stealth.jpg',
      imgCaption: 'Full stealth satin PPF conversion on McLaren 765LT with instant self-healing elastomeric topcoat',
      quickSpecs: {
        topic: 'Paint Protection Film',
        cutting: 'Digital Plotter & Edges',
        safety: 'Self-Healing TPU Layer',
        cureTemp: 'Ambient / Warm Water',
        longevity: '10-Year Warranty'
      },
      leadPara: 'For automotive purists and collectors, the prospect of rock chips and wash-induced swirl marks on factory clearcoat is a persistent source of distress. Paint Protection Film (PPF) represents the gold standard of mechanical vehicle defense, but its most captivating attribute is its ability to heal itself from surface scratches.',
      para1: 'Unlike standard vinyl wraps which measure 3.5 to 4 mils in thickness, premium PPF is an 8 to 10 mil optical-grade composite constructed from aliphatic thermoplastic polyurethane (TPU). At its outermost boundary sits an elastomeric polymer topcoat possessing shape-memory elasticity.',
      pullquote: 'When you expose elastomeric TPU to solar heat, the cross-linked hydrogen bonds reorganize into their original relaxation geometry, causing wash swirls and key scratches to vanish in real time.',
      pullquoteCite: '— Lucas Miller, Master Detailer & PPF Specialist',
      heading2: 'The Chemistry of Hydrogen-Bonded Memory Recovery',
      para2: 'When a stone or abrasive wash mitt glides across the surface of the film, it forces the cross-linked polymer chains apart, creating a visible scratch. However, unlike rigid automotive clearcoat which fractures permanently, the elastomeric topcoat merely stretches.',
      para3: 'When exposed to thermal energy—whether from ambient summer sunshine (above 30°C), a heat gun, or a bucket of hot tap water—the kinetic excitation allows the hydrogen bonds to snap back into their default lowest-energy configuration, pulling the microscopic furrow shut.',
      inlineImg: 'assets/images/gallery-mclaren-stealth.jpg',
      inlineCaption: 'Satin self-healing PPF wrapped deeply behind door jamb returns for invisible protection.',
      calloutContent: 'Beware of shops offering bulk hand-cut PPF on exotic cars. Because PPF is twice as thick as cast vinyl, cutting it with a razor blade on your car requires severe downward blade pressure that almost always scores factory paint. Aureon uses precision computerized DAP plotting with extended wrap margins.',
      para4: 'Furthermore, modern PPF incorporates proprietary ceramic nanoparticles inside the topcoat. This produces high water contact angles in excess of 110 degrees, making dirt, brake dust, and bug acid slide off effortlessly with contactless pressure washing.',
      verdict: 'Self-healing PPF is not science fiction—it is advanced polymer chemistry working tirelessly to preserve your vehicle\'s factory paintwork from the harsh realities of daily driving. Wrap it once, and drive with absolute peace of mind.',
      faqs: [
        {
          q: 'How deep of a scratch can self-healing PPF actually recover from?',
          a: 'PPF topcoats heal all normal road wash swirls, brush marks, and light stone abrasion scratches (up to 0.5 mil deep). If a high-speed rock gouges completely through the 8-mil TPU polyurethane into the adhesive, the film will need section replacement, but your paint underneath remains completely undamaged.'
        },
        {
          q: 'Will PPF yellow or discolor under intense ultraviolet sun exposure?',
          a: 'Older generation PVC films used to yellow. Aureon exclusively uses 100% non-yellowing aliphatic thermoplastic polyurethanes backed by a written 10-year manufacturer warranty against yellowing, hazing, and bubbling.'
        },
        {
          q: 'Can you turn a glossy car into a matte finish with PPF?',
          a: 'Yes! Our Stealth Satin PPF transforms glossy factory paint into an ultra-smooth satin frozen finish while providing full 8-mil ballistic stone-chip defense.'
        },
        {
          q: 'Can ceramic coating be applied on top of PPF?',
          a: 'Yes, absolutely. We frequently apply a specialized flexible ceramic coating over newly installed PPF to increase hydrophobicity, gloss depth, and ease of routine cleaning.'
        }
      ]
    },

    'finish-selection-guide': {
      id: 'finish-selection-guide',
      category: 'COLOR ARCHITECTURE • DESIGN ESSAY',
      categoryIcon: 'fa-solid fa-gem',
      title: 'Liquid Metallic vs. Ultra-Matte: Selecting the Correct Finish for Sculptural Bodylines.',
      subtext: 'Sharp Italian wedge profiles react differently to matte diffusion than sweeping German curves. How ambient specular reflection alters the perception of vehicle proportions.',
      date: 'August 29, 2026',
      readTime: '4 Min Read',
      author: 'Marcus Vance',
      role: 'Founder & Master Livery Director',
      avatar: 'assets/images/team-marcus.jpg',
      bio: 'Master livery architect combining fine art color harmony with automotive aerodynamic sculpting for premier private collections.',
      stat1Val: '350+',
      stat1Lbl: 'Color Formulas',
      stat2Val: '99.5%',
      stat2Lbl: 'Specular Gloss Index',
      heroImg: 'assets/images/gallery-rolls-dualtone.jpg',
      imgCaption: 'Rolls Royce Phantom dual-tone transformation in Liquid Champagne Gold and Satin Obsidian',
      quickSpecs: {
        topic: 'Color Theory & Finish',
        cutting: 'Micro-Comply Cast',
        safety: 'Zero Orange Peel Cast',
        cureTemp: '100°C Post-Heat',
        longevity: '5 to 7 Years'
      },
      leadPara: 'Color is not merely an exterior cosmetic covering; it is an architectural medium that manipulates how ambient photons interact with the sculpted steel, aluminum, and carbon fiber planes of an automobile. Choosing between liquid ultra-gloss and diffuse satin-matte requires understanding the vehicle\'s design language.',
      para1: 'Automotive designers sculpt clay models under linear overhead studio lighting grids to assess highlight roll-off and shadow gradients. When you change the surface finish of a vehicle from high-gloss reflection to matte diffusion, you fundamentally alter the visual proportion, width, and stance of the automobile.',
      pullquote: 'Gloss mirrors the surrounding environment; matte forces the eye to focus purely on the geometric sculpture of the machine.',
      pullquoteCite: '— Marcus Vance, Founder & Livery Director',
      heading2: 'Specular Highlight Dynamics: Sharp Angles vs. Flowing Curves',
      para2: 'Wedge-shaped supercars featuring aggressive planar facets—such as Lamborghini Aventadors or McLaren 765LTs—excel under satin and matte finishes. The diffuse surface scatters incoming light in all directions, turning creases into dramatic dark shadow lines that accentuate knife-edge bodylines.',
      para3: 'Conversely, organic flowing silhouettes with voluptuous compound curves—such as Porsche 911s, Ferrari 296 GTBs, or Aston Martin DBSs—frequently lose their sculptural depth under flat matte. These vehicles come alive under high-clarity liquid metallics and color-shifting pearls where reflections dance along flowing arches.',
      inlineImg: 'assets/images/gallery-rolls-dualtone.jpg',
      inlineCaption: 'Dual-tone luxury execution accentuating formal coachline geometry on luxury grand tourer.',
      calloutContent: 'When selecting ultra-gloss vinyl, always demand cast films with PET liner backings (such as Inozetek Supergloss or Avery Supreme). Traditional paper-backed vinyls suffer from orange peel texture that betrays the wrap under direct sunlight. PET liners deliver paint-like optical reflection.',
      para4: 'During your Aureon private design consultation, we photograph your vehicle in our calibrated studio light bay and render 4K visual simulations across multiple finishes, testing how daylight and night-time street illumination interact with your machine.',
      verdict: 'The ideal finish is one that harmonizes with your vehicle\'s organic architecture. Let design heritage and light physics guide your commissioning palette.',
      faqs: [
        {
          q: 'Does matte vinyl require special maintenance compared to gloss vinyl?',
          a: 'Yes. Matte vinyl must never be waxed or polished with abrasives, as friction will buff the microscopic texture smooth and create shiny, uneven patches. We supply our matte wrap clients with dedicated matte detail sprays that clean without adding unwanted gloss.'
        },
        {
          q: 'What is PET liner technology and why is it superior for gloss wraps?',
          a: 'Standard vinyl rolls use paper backing, which transfers its pulp texture into the warm vinyl adhesive, causing orange peel distortion. PET (polyethylene terephthalate) is an ultra-flat plastic liner that yields mirror-smooth, liquid reflection identical to fresh factory clearcoat.'
        },
        {
          q: 'Can you combine gloss and matte on the same vehicle build?',
          a: 'Yes! High-contrast combinations—such as a satin pearl white body with high-gloss piano black roof and carbon fiber mirrors—create an aggressive, sophisticated motorsport contrast.'
        },
        {
          q: 'Are color-shifting chameleon wraps legal for street driving?',
          a: 'Yes, color-shift wraps are completely legal in all 50 states and international markets. In most jurisdictions, you simply update your vehicle registration color to multi-color or the dominant base hue.'
        }
      ]
    },

    'wrap-maintenance-rules': {
      id: 'wrap-maintenance-rules',
      category: 'CARE GUIDES • ATELIER PROTOCOL',
      categoryIcon: 'fa-solid fa-sparkles',
      title: 'The 7 Golden Commandments of Washing and Preserving Wrapped Vehicles.',
      subtext: 'From maintaining safe 18-inch pressure washer distances along panel seams to avoiding petroleum-based waxes, master the essential protocol for 5+ years of flawless vinyl luster.',
      date: 'August 18, 2026',
      readTime: '6 Min Read',
      author: 'Lucas Miller',
      role: 'Master Detailer & PPF Specialist',
      avatar: 'assets/images/team-lucas.jpg',
      bio: 'Elite vehicle preservation specialist instructing supercar owners on contactless washing and hydrophobic ceramic care.',
      stat1Val: '14-Day',
      stat1Lbl: 'Free QC Inspection',
      stat2Val: 'pH 7.0',
      stat2Lbl: 'Neutral Shampoo Rule',
      heroImg: 'assets/images/gallery-gwagon.jpg',
      imgCaption: 'Hand wash decontamination protocol inside Aureon wash bay utilizing pH-neutral snow foam',
      quickSpecs: {
        topic: 'Vehicle Preservation',
        cutting: 'Hand Wash Safe',
        safety: 'pH Neutral Shampoos',
        cureTemp: 'Ambient Temperature',
        longevity: 'Maintains 7-Yr Life'
      },
      leadPara: 'A master automotive wrap is a masterpiece of material science and hand installation. However, the longevity and showroom radiance of your build over 5 to 7 years is heavily dependent on post-installation maintenance protocols. Harsh chemicals and automated car washes remain the primary culprits behind premature vinyl degradation.',
      para1: 'Commercial tunnel car washes utilize abrasive rotating nylon bristles that generate severe micro-marring across gloss vinyl and destroy the matte texture of satin films. Furthermore, industrial wash detergents possess extreme pH levels (pH > 11) that strip plasticizers from vinyl, leading to premature brittleness and cracking.',
      pullquote: 'Treat your wrapped vehicle with the same care as an exotic bespoke tailored suit. Hand-wash with pH-neutral shampoos, maintain standoff distance with pressure washers, and blot away contaminants immediately.',
      pullquoteCite: '— Lucas Miller, Master Detailer & Preservation Specialist',
      heading2: 'The 7 Essential Commandments of Wrap Longevity',
      para2: 'To protect your investment and maintain your Aureon 5-Year Studio Warranty, we prescribe these 7 strict protocols:',
      para3: '1. Always hand wash using the two-bucket method with grit guards.\n2. Use strictly pH-neutral automotive soaps (pH 6.5–7.5).\n3. Keep pressure-washer nozzles at least 18 inches away from all panel edges and seams.\n4. Avoid spray angles greater than 45 degrees against panel returns.\n5. Remove bird droppings, bug splatter, and tree sap within 24 hours using warm microfiber.\n6. Never apply paste carnauba waxes or petroleum-based solvents onto matte wraps.\n7. Dry with ultra-plush twisted-loop microfiber towels to prevent mineral water spotting.',
      inlineImg: 'assets/images/gallery-gwagon.jpg',
      inlineCaption: 'Gentle two-bucket wash with microfiber mitt on military matte green G-Wagon.',
      calloutContent: 'Attending your complimentary 14-day post-installation inspection at our studio is mandatory for full warranty coverage. We inspect all recessed edges with an infrared pyrometer to ensure permanent molecular adhesion after the vinyl has undergone its initial environmental thermal cycles.',
      para4: 'Applying a dedicated vinyl ceramic spray sealant every 90 days creates an active hydrophobic shield that repels road grime, UV radiation, and acid rain, making routine cleaning faster, safer, and completely swirl-free.',
      verdict: 'With proper contactless wash technique and regular ceramic topcoat nourishment, your vehicle wrap will look as breathtaking on year five as it did the afternoon you drove out of our atelier cleanroom.',
      faqs: [
        {
          q: 'Can I take my wrapped car through an automated brush car wash?',
          a: 'Never. Automated brush car washes will severely scratch and scuff vinyl film and can catch high-pressure water jets beneath panel returns, causing edge lifting. Only hand washing or 100% brushless touchless washes are safe.'
        },
        {
          q: 'What should I do if bird droppings or tree sap get on my wrap?',
          a: 'Act promptly. Soak a clean microfiber towel in warm water, lay it over the droppings for 3 minutes to soften the contaminant, and gently wipe it away. Never aggressively scratch or scrape hardened sap with fingernails or blades.'
        },
        {
          q: 'Can I use a pressure washer at home to clean my wrapped car?',
          a: 'Yes, provided you maintain at least 18 inches of distance between the nozzle and the car, keep the water pressure below 2,000 PSI, and spray perpendicularly rather than directly into panel seam cracks.'
        },
        {
          q: 'How does ceramic coating help with wrap maintenance?',
          a: 'Ceramic coatings seal the microscopic pores of the vinyl, providing high hydrophobicity. Dirt and brake dust cannot adhere strongly, allowing most road grime to rinse off with water alone without heavy scrubbing.'
        }
      ]
    },

    'cover-story': {
      id: 'cover-story',
      category: 'AEROSPACE MATERIALS • LEAD ESSAY',
      categoryIcon: 'fa-solid fa-gem',
      title: 'Cast PVC vs. Polyurethane: The Engineering Principles Behind 7-Year Wrap Durability.',
      subtext: 'Why conventional calendered films shrink, crack, and discolor after only 18 months under relentless UV radiation, and how aerospace cast vinyls lock crystalline memory around supercar contours.',
      date: 'October 2026',
      readTime: '7 Min Read',
      author: 'Marcus Vance',
      role: 'Founder & Master Livery Director',
      avatar: 'assets/images/team-marcus.jpg',
      bio: 'Pioneering livery architect and materials engineer dedicated to zero-defect automotive transformation standards.',
      stat1Val: '7-Year',
      stat1Lbl: 'Cast Longevity',
      stat2Val: '105°C',
      stat2Lbl: 'Memory Reset Temp',
      heroImg: 'assets/images/lead-essay-durability.jpg',
      imgCaption: 'Precision hand-laid cast vinyl cured with digital pyrometer infrared thermography',
      quickSpecs: {
        topic: 'Aerospace Materials',
        cutting: '100% Knife-Free',
        safety: 'Zero Clearcoat Stress',
        cureTemp: '95°C – 105°C IR',
        longevity: '7-Year Durability'
      },
      leadPara: 'When selecting a transformation film for a vehicle in excess of $200,000, understanding the difference between calendered and cast PVC is not an academic exercise—it is the difference between paint preservation and catastrophic clearcoat damage.',
      para1: 'Calendered vinyl is produced by extruding a PVC dough through heavy rolling pins under tension. This imparts physical stress into the molecular chain. When subjected to UV radiation and thermal cycling, calendered film attempts to shrink back to its original dough form, pulling back from edges and lifting on recesses.',
      pullquote: 'In contrast, aerospace cast vinyl is formulated as a liquid organosol poured onto a casting sheet and cured in an oven with zero physical tension. The resulting film possesses isotropic molecular balance, yielding zero memory pull-back.',
      pullquoteCite: '— Marcus Vance, Founder & Master Livery Director',
      heading2: 'The 95°C Post-Heating Memory Threshold',
      para2: 'Once a panel is wrapped, the vinyl is subjected to infrared pyrometer-controlled post-heating at 95°C to 105°C. This alters the plasticizer crystalline matrix, permanently resetting its relaxation state to the exact contours of the vehicle\'s fender or body crease.',
      para3: 'Because premium cast films employ low-tack, cross-linked acrylic adhesive systems with air-egress microchannels, thermal release leaves zero chemical residue upon decommissioning 5 to 7 years later, revealing pristine factory paint.',
      inlineImg: 'assets/images/craft-detail.jpg',
      inlineCaption: 'Surgical knife-free edge tucking ensuring full factory door jamb coverage.',
      calloutContent: 'Always verify that your studio uses genuine 3M 2080, Avery Dennison Supreme, or Inozetek Supergloss cast films. Lower-grade calendered films may look acceptable on day one, but will begin shrinking, cracking, and tearing at corners within 12 months.',
      para4: 'Our hospital-grade climate cleanroom bays maintain positive air pressure at 22°C to ensure zero airborne contamination during application, guaranteeing mirror-flat optical clarity.',
      verdict: 'Cast vinyl engineering is the foundation of vehicle aesthetic preservation. Trust only authentic cast films and certified master installers.',
      faqs: [
        {
          q: 'Why does cast vinyl cost more than calendered vinyl?',
          a: 'Cast vinyl is manufactured through a slow, liquid casting process with premium UV stabilizers and cross-linked adhesives that yield dimensional stability for 5 to 7 years without shrinking or lifting.'
        },
        {
          q: 'Does infrared post-heating damage car paint?',
          a: 'No. Factory automotive clearcoats are baked at 140°C during factory assembly. Our post-heating temperatures of 95°C–105°C are monitored with digital infrared pyrometers and are completely safe for all OEM paint systems.'
        },
        {
          q: 'Can cast vinyl protect against stone chips?',
          a: 'Cast vinyl protects against light scratches, swirls, bird droppings, and UV solar fading. For heavy highway stone-chip defense, we recommend pairing vinyl with 8-mil Paint Protection Film (PPF).'
        },
        {
          q: 'How long does a full cast vehicle wrap take to install?',
          a: 'A master full-vehicle wrap takes 3 to 4 days inside our cleanroom bays, including complete chemical wash decontamination, knife-free panel wrapping, door jamb returns, and 24-hour post-heat stabilization.'
        }
      ]
    }
  };

const dom = {

    breadcrumbTitle: document.getElementById('blgdBreadcrumbTitle'),
    categoryPill: document.getElementById('blgdCategoryPill'),
    categoryText: document.getElementById('blgdCategoryText'),
    heroHeadline: document.getElementById('blgdHeroHeadline'),
    heroSubtext: document.getElementById('blgdHeroSubtext'),
    heroAuthorImg: document.getElementById('blgdHeroAuthorImg'),
    heroAuthorName: document.getElementById('blgdHeroAuthorName'),
    heroAuthorRole: document.getElementById('blgdHeroAuthorRole'),
    heroDate: document.getElementById('blgdHeroDate'),
    heroReadTime: document.getElementById('blgdHeroReadTime'),
    heroImg: document.getElementById('blgdHeroImg'),
    imgCaption: document.getElementById('blgdImgCaption'),

sidebarAuthorImg: document.getElementById('blgdSidebarAuthorImg'),
    sidebarAuthorName: document.getElementById('blgdSidebarAuthorName'),
    sidebarAuthorRole: document.getElementById('blgdSidebarAuthorRole'),
    sidebarAuthorBio: document.getElementById('blgdSidebarAuthorBio'),
    specTopic: document.getElementById('specTopic'),
    specCuttingSystem: document.getElementById('specCuttingSystem'),
    specSafety: document.getElementById('specSafety'),
    specCureTemp: document.getElementById('specCureTemp'),
    specLongevity: document.getElementById('specLongevity'),
    sidebarConsultBtn: document.getElementById('sidebarConsultBtn'),

leadPara: document.getElementById('blgdLeadPara'),
    para1: document.getElementById('blgdPara1'),
    pullquote: document.getElementById('blgdPullquote'),
    pullquoteCite: document.getElementById('blgdPullquoteCite'),
    heading2: document.getElementById('blgdHeading2'),
    para2: document.getElementById('blgdPara2'),
    para3: document.getElementById('blgdPara3'),
    inlineImg: document.getElementById('blgdInlineImg'),
    inlineCaptionText: document.getElementById('blgdInlineCaptionText'),
    calloutContent: document.getElementById('blgdCalloutContent'),
    para4: document.getElementById('blgdPara4'),
    verdictSummary: document.getElementById('blgdVerdictSummary'),

faqAccordion: document.getElementById('blgdFaqAccordion'),
    accordionItems: document.querySelectorAll('.blgd-accordion-item'),

heroCopyLinkBtn: document.getElementById('heroCopyLinkBtn'),
    footerCopyLinkBtn: document.getElementById('footerCopyLinkBtn'),

consultModal: document.getElementById('consultationModal'),
    openConsultBtns: [
      document.getElementById('ctaBookConsultBtn'),
      document.getElementById('sidebarConsultBtn')
    ],
    closeConsultModalBtn: document.getElementById('closeConsultModalBtn'),
    consultModalForm: document.getElementById('consultationModalForm'),
    modalServiceType: document.getElementById('modalServiceType'),
    modalNotes: document.getElementById('modalUserNotes'),

toastContainer: document.getElementById('toastContainer'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    rtlToggleBtn: document.getElementById('rtlToggleBtn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    navMenu: document.getElementById('navMenu')
  };

let currentArticleId = 'knife-free-standard';

  function applyArticle(articleKey) {
    const data = BLOGS_DATABASE[articleKey] || BLOGS_DATABASE['knife-free-standard'];
    currentArticleId = data.id;

document.title = `${data.title} | AUREON CUSTOMS Journal`;

if (dom.breadcrumbTitle) dom.breadcrumbTitle.textContent = data.title;

if (dom.categoryText) dom.categoryText.textContent = data.category;
    if (dom.categoryPill) {
      dom.categoryPill.innerHTML = `<i class="${data.categoryIcon}"></i> <span>${data.category}</span>`;
    }
    if (dom.heroHeadline) dom.heroHeadline.textContent = data.title;
    if (dom.heroSubtext) dom.heroSubtext.textContent = data.subtext;
    if (dom.heroAuthorImg) dom.heroAuthorImg.src = data.avatar;
    if (dom.heroAuthorName) dom.heroAuthorName.textContent = data.author;
    if (dom.heroAuthorRole) dom.heroAuthorRole.textContent = data.role;
    if (dom.heroDate) dom.heroDate.textContent = data.date;
    if (dom.heroReadTime) dom.heroReadTime.textContent = data.readTime;

if (dom.heroImg) {
      dom.heroImg.src = data.heroImg;
      dom.heroImg.alt = data.title;
    }
    if (dom.imgCaption) dom.imgCaption.textContent = data.imgCaption;

if (dom.sidebarAuthorImg) dom.sidebarAuthorImg.src = data.avatar;
    if (dom.sidebarAuthorName) dom.sidebarAuthorName.textContent = data.author;
    if (dom.sidebarAuthorRole) dom.sidebarAuthorRole.textContent = data.role;
    if (dom.sidebarAuthorBio) dom.sidebarAuthorBio.textContent = data.bio;

if (dom.specTopic) dom.specTopic.textContent = data.quickSpecs.topic;
    if (dom.specCuttingSystem) dom.specCuttingSystem.textContent = data.quickSpecs.cutting;
    if (dom.specSafety) dom.specSafety.textContent = data.quickSpecs.safety;
    if (dom.specCureTemp) dom.specCureTemp.textContent = data.quickSpecs.cureTemp;
    if (dom.specLongevity) dom.specLongevity.textContent = data.quickSpecs.longevity;

if (dom.leadPara) dom.leadPara.textContent = data.leadPara;
    if (dom.para1) dom.para1.textContent = data.para1;
    if (dom.pullquote) dom.pullquote.textContent = data.pullquote;
    if (dom.pullquoteCite) dom.pullquoteCite.textContent = data.pullquoteCite;
    if (dom.heading2) dom.heading2.textContent = data.heading2;
    if (dom.para2) dom.para2.textContent = data.para2;
    if (dom.para3) dom.para3.textContent = data.para3;

if (dom.inlineImg) {
      dom.inlineImg.src = data.inlineImg;
      dom.inlineImg.alt = data.title;
    }
    if (dom.inlineCaptionText) dom.inlineCaptionText.textContent = data.inlineCaption;

if (dom.calloutContent) dom.calloutContent.textContent = data.calloutContent;
    if (dom.para4) dom.para4.textContent = data.para4;
    if (dom.verdictSummary) dom.verdictSummary.textContent = data.verdict;

if (dom.faqAccordion && data.faqs) {
      dom.faqAccordion.innerHTML = data.faqs.map((faq, index) => `
        <div class="blgd-accordion-item ${index === 0 ? 'active' : ''}">
          <button class="blgd-accordion-trigger" aria-expanded="${index === 0 ? 'true' : 'false'}">
            <span class="blgd-faq-question">${faq.q}</span>
            <span class="blgd-faq-icon"><i class="fa-solid ${index === 0 ? 'fa-minus' : 'fa-plus'}"></i></span>
          </button>
          <div class="blgd-accordion-panel" style="${index === 0 ? 'max-height: 500px; padding: 0 26px 24px;' : ''}">
            <p class="blgd-faq-answer">${faq.a}</p>
          </div>
        </div>
      `).join('');

initAccordionListeners();
    }

if (dom.modalNotes) {
      dom.modalNotes.value = `Referencing technical paper: "${data.title}"`;
    }
  }

function initFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const blogParam = params.get('blog');

    if (blogParam && BLOGS_DATABASE[blogParam]) {
      applyArticle(blogParam);
    } else {
      applyArticle('knife-free-standard');
    }
  }

window.addEventListener('popstate', (e) => {
    initFromUrl();
  });

function initAccordionListeners() {
    const items = document.querySelectorAll('.blgd-accordion-item');

    items.forEach((item) => {
      const trigger = item.querySelector('.blgd-accordion-trigger');
      const icon = item.querySelector('.blgd-faq-icon i');
      const panel = item.querySelector('.blgd-accordion-panel');

      if (trigger) {
        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

items.forEach((sibling) => {
            if (sibling !== item) {
              sibling.classList.remove('active');
              const sTrigger = sibling.querySelector('.blgd-accordion-trigger');
              const sIcon = sibling.querySelector('.blgd-faq-icon i');
              const sPanel = sibling.querySelector('.blgd-accordion-panel');
              if (sTrigger) sTrigger.setAttribute('aria-expanded', 'false');
              if (sIcon) sIcon.className = 'fa-solid fa-plus';
              if (sPanel) sPanel.style.maxHeight = null;
            }
          });

if (isActive) {
            item.classList.remove('active');
            trigger.setAttribute('aria-expanded', 'false');
            if (icon) icon.className = 'fa-solid fa-plus';
            if (panel) panel.style.maxHeight = null;
          } else {
            item.classList.add('active');
            trigger.setAttribute('aria-expanded', 'true');
            if (icon) icon.className = 'fa-solid fa-minus';
            if (panel) panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
          }
        });
      }
    });
  }

function initTocScrollspy() {
    const tocLinks = document.querySelectorAll('.blgd-toc-link');
    const sections = document.querySelectorAll('.blgd-content-block');

    tocLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

          tocLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });

    window.addEventListener('scroll', () => {
      let currentSection = '';
      const scrollPos = window.scrollY + 160;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
          currentSection = section.getAttribute('id');
        }
      });

      if (currentSection) {
        tocLinks.forEach((link) => {
          const match = link.getAttribute('href') === `#${currentSection}`;
          link.classList.toggle('active', match);
        });
      }
    });
  }

function copyArticleLink() {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        showToast('Article link copied to clipboard!', 3000);
      }).catch(() => {
        showToast('Article URL: ' + url, 4000);
      });
    } else {
      showToast('Article URL: ' + url, 4000);
    }
  }

  if (dom.heroCopyLinkBtn) {
    dom.heroCopyLinkBtn.addEventListener('click', copyArticleLink);
  }
  if (dom.footerCopyLinkBtn) {
    dom.footerCopyLinkBtn.addEventListener('click', copyArticleLink);
  }

function openConsultModal(note = '') {
    if (!dom.consultModal) return;
    dom.consultModal.removeAttribute('hidden');
    dom.consultModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (note && dom.modalNotes) {
      dom.modalNotes.value = note;
    }

    const firstInput = dom.consultModal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  }

  function closeConsultModal() {
    if (!dom.consultModal) return;
    dom.consultModal.setAttribute('hidden', '');
    dom.consultModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  dom.openConsultBtns.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openConsultModal();
      });
    }
  });

  if (dom.closeConsultModalBtn) {
    dom.closeConsultModalBtn.addEventListener('click', closeConsultModal);
  }

  if (dom.consultModal) {
    dom.consultModal.addEventListener('click', (e) => {
      if (e.target === dom.consultModal) {
        closeConsultModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dom.consultModal && !dom.consultModal.hasAttribute('hidden')) {
      closeConsultModal();
    }
  });

  if (dom.consultModalForm) {
    dom.consultModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalUserName')?.value || 'Client';
      const vehicle = document.getElementById('modalVehicleModel')?.value || 'Vehicle';

      showToast(`Thank you, ${name}! Your consultation request for your ${vehicle} has been received. Our livery director will contact you promptly.`, 5000);

      dom.consultModalForm.reset();
      closeConsultModal();
    });
  }

function showToast(message, duration = 4000) {
    if (!dom.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'srvd-toast';
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check" style="color: #c9a96e; font-size: 1.1rem;"></i>
      <span>${message}</span>
    `;

    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 320);
    }, duration);
  }

if (dom.backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        dom.backToTopBtn.classList.add('visible');
      } else {
        dom.backToTopBtn.classList.remove('visible');
      }
    });

    dom.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

function initTheme() {
    const savedTheme = localStorage.getItem('aureon_theme') || 'light';
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      localStorage.setItem('aureon_theme', 'dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      localStorage.setItem('aureon_theme', 'light');
    }
  }

  if (dom.themeToggleBtn) {
    dom.themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('theme-dark');
      applyTheme(isDark ? 'light' : 'dark');
      showToast(`Switched to ${isDark ? 'Light' : 'Dark'} Mode`, 2000);
    });
  }

if (dom.rtlToggleBtn) {
    dom.rtlToggleBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      showToast(`Layout orientation: ${newDir.toUpperCase()}`, 2000);
    });
  }

if (dom.mobileMenuBtn && dom.navMenu) {
    dom.mobileMenuBtn.addEventListener('click', () => {
      const isOpen = dom.navMenu.classList.contains('mobile-active');
      dom.navMenu.classList.toggle('mobile-active', !isOpen);
      dom.mobileMenuBtn.classList.toggle('active', !isOpen);
      dom.mobileMenuBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  }

function initStickyHeader() {
    const header = document.querySelector('.site-header') || document.getElementById('mainHeader');
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

initTheme();
  initStickyHeader();
  initFromUrl();
  initTocScrollspy();
});

