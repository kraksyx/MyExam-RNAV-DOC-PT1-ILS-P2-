const questions = [
  {
    "question": "ILS markers are identified in the aeroplane by colour light and audio signal. The identification of the outer marker is:",
    "options": [
      "High-pitched dashes; amber light",
      "Low-pitched dots and dashes; amber light",
      "High-pitched dots and dashes; blue light",
      "Low-pitched dashes; blue light"
    ],
    "correct": 3
  },
  {
    "question": "The azimuth and area coverage of a Cat I ILS localiser is:",
    "options": [
      "8\u00b0 at 10 nm, 25\u00b0 at 25 nm",
      "35\u00b0 at 17 nm, 10\u00b0 at 25 nm",
      "8\u00b0 at 35 nm, 25\u00b0 at 10 nm",
      "8\u00b0 at 10 nm, 10\u00b0 at 25 nm"
    ],
    "correct": 1
  },
  {
    "question": "ILS back beams may be received:",
    "options": [
      "When flying outside the area of coverage",
      "Never",
      "When approaching the ILS from behind the glide path aerial",
      "When approaching the ILS from behind the localiser aerial"
    ],
    "correct": 3
  },
  {
    "question": "The emission characteristics of the ILS and a typical localiser frequency are:",
    "options": [
      "A9W, 329.30 MHz",
      "A8W, 110.30 MHz",
      "A9W, 110.70 MHz",
      "A8W, 113.30 MHz"
    ],
    "correct": 1
  },
  {
    "question": "The ILS glide path coverage in elevation is accurate to:",
    "options": [
      "An angle 1.35\u00b0 to an angle of 5.25\u00b0 above the horizontal for a 3\u00b0 glide path",
      "An angle 1.35\u00b0 to an angle of 5.25\u00b0 above the horizontal for a 3.25\u00b0 glide path",
      "An angle 0.45\u00b0 to an angle of 1.75\u00b0 above the horizontal for a 3\u00b0 glide path",
      "An angle 0.45\u00b0 to an angle of 1.75\u00b0 above the horizontal for a 3.25\u00b0 glide path"
    ],
    "correct": 0
  },
  {
    "question": "An aircraft is flying downwind outside the coverage of the ILS. The CDI indications will be:",
    "options": [
      "Unreliable in azimuth and elevation",
      "Reliable in azimuth, unreliable in elevation",
      "No indications will be shown",
      "Reliable in azimuth and elevation"
    ],
    "correct": 0
  },
  {
    "question": "In which band does the ILS glide path operate:",
    "options": [
      "Metric",
      "Centimetric",
      "Decimetric",
      "Hectometric"
    ],
    "correct": 2
  },
  {
    "question": "According to the diagram of the ILS display, the aircraft is:",
    "options": [
      "High on the approach and to the left of the centre line",
      "Low on the approach and to the left of the centre line",
      "High on the approach and to the right of the centre line",
      "Low on the approach and to the right of the centre line"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft is flying an ILS glide path of 2.8\u00b0. What height should it be passing as it approaches the outer marker at 3.9 nm from the ILS touchdown point.",
    "options": [
      "950 ft",
      "1000 ft",
      "1100 ft",
      "1200 ft"
    ],
    "correct": 2
  },
  {
    "question": "An aircraft on a 3\u00b0 ILS approach is flying a ground speed of 150 knots. At the outer marker (4.5 nm from the threshold) the speed must be reduced to 120 knots. The ROD should be reduced by:",
    "options": [
      "120 fpm",
      "150 fpm",
      "170 fpm",
      "190 fpm"
    ],
    "correct": 1
  },
  {
    "question": "The coverage of the ILS localiser at 17 nm for a CAT 1 ILS is guaranteed up to an angle either side of the extended centreline of (i) using the signal outside the coverage limits on the approach side of the localiser aerial (ii) result in reverse sense indications.",
    "options": [
      "(i) 35\u00b0 ; (ii) can",
      "(i) 25\u00b0 ; (ii) cannot",
      "(i) 35\u00b0 ; (ii) cannot",
      "(i) 25\u00b0 ; (ii) can"
    ],
    "correct": 0
  },
  {
    "question": "The maximum safe \u2018fly-up\u2019 indication on the glide path needle (assuming a 5-dot indicator) is:",
    "options": [
      "2 dots",
      "1.5 dots",
      "2.5 dots",
      "1 dot"
    ],
    "correct": 2
  },
  {
    "question": "The rate of descent (in ft/min) for a 3\u00b0 glide-slope at a GS of 140 kt is:",
    "options": [
      "325",
      "640",
      "710",
      "520"
    ],
    "correct": 2
  },
  {
    "question": "The middle marker is usually located at a range of ___, with an audio frequency of ___, and illuminates the ___ light:",
    "options": [
      "4\u20136 nm, 1300 Hz, white",
      "1 km, 400 Hz, white",
      "1 km, 1300 Hz, amber",
      "1 km, 400 Hz, amber"
    ],
    "correct": 2
  },
  {
    "question": "For a 2.7\u00b0 glide path on a Category I ILS the vertical coverage is:",
    "options": [
      "1.22\u00b0 \u2013 4.73\u00b0",
      "2.05\u00b0 \u2013 5.55\u00b0",
      "1.85\u00b0 \u2013 4.75\u00b0",
      "1.35\u00b0 \u2013 5.25\u00b0"
    ],
    "correct": 0
  },
  {
    "question": "For reliable navigation information the approximate coverage of a 3\u00b0 ILS glide slope is:",
    "options": [
      "0.7\u00b0 above and below the glide path and 8\u00b0 either side of the localiser centre line",
      "0.45\u00b0 from the horizontal to 1.75\u00b0 above the glide path and 8\u00b0 either side of the localiser centre line",
      "1.5\u00b0 to 5\u00b0 from the horizontal and 8\u00b0 either side of the localiser",
      "3\u00b0 above and below the glide path and 10\u00b0 either side of the localiser centre line"
    ],
    "correct": 2
  },
  {
    "question": "What frequency is assigned to all ILS marker beacons?",
    "options": [
      "One chosen from between 108\u2013112 MHz at odd tenths",
      "75 MHz",
      "90 Hz",
      "150 Hz"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is TRUE in respect of using ILS?",
    "options": [
      "When using a CDI you must set the OBS to the localiser course",
      "When using a CDI in the overshoot sector you must disobey the needles",
      "When using an HSI you must set the course arrow to the localiser course",
      "When using an HSI the glide path must be set before approach"
    ],
    "correct": 2
  },
  {
    "question": "The ILS localiser is normally positioned:",
    "options": [
      "300 m from the downwind end of the runway",
      "300 m from the threshold (the glide path)",
      "300 m from the upwind end of the runway",
      "200 m abeam the threshold"
    ],
    "correct": 2
  },
  {
    "question": "ILS glide path transmits lobes which are:",
    "options": [
      "On the same frequency and are separated by phase comparison",
      "On different frequencies which are then phase compared",
      "On different frequencies and have different modulations",
      "On the same frequency and have different modulations"
    ],
    "correct": 1
  }
];