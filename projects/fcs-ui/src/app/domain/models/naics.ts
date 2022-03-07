export interface INaicsCode {
  code: number;
  description: string;
  children: INaicsCode[];
}

export const naicsCodes = [
  {
    code: 11,
    description: 'Agriculture, Forestry, Fishing and Hunting',
    children: [
      {
        code: 111,
        description: 'Crop Production',
        children: [],
      },
      {
        code: 112,
        description: 'Animal Production and Aquaculture',
        children: [],
      },
      {
        code: 113,
        description: 'Forestry and Logging',
        children: [],
      },
      {
        code: 114,
        description: 'Fishing, Hunting, and Trapping',
        children: [],
      },
      {
        code: 115,
        description: 'Support Activities for Agriculture and Forestry',
        children: [],
      },
    ],
  },
  {
    code: 21,
    description: 'Mining, Quarrying, and Oil and Gas Extraction',
    children: [
      {
        code: 211,
        description: 'Oil and Gas Extraction',
        children: [],
      },

      {
        code: 212,
        description: 'Mining (except Oil and Gas)',
        children: [],
      },
      {
        code: 213,
        description: 'Support Activities for Mining',
        children: [],
      },
    ],
  },
  {
    code: 22,
    description: 'Utilities',
    children: [
      {
        code: 221,
        description: 'Utilities',
        children: [],
      },
    ],
  },
  {
    code: 23,
    description: 'Construction',
    children: [
      {
        code: 236,
        description: 'Construction of Buildings',
        children: [
          {
            code: 2361,
            description: 'Residential Building Construction',
            children: [],
          },
          {
            code: 2362,
            description: 'Nonresidential Building Construction',
            children: [
              {
                code: 23621,
                description: 'Industrial Building Construction',
                children: [],
              },
              {
                code: 23622,
                description:
                  'Commercial and Institutional Building Construction',
                children: [],
              },
            ],
          },
        ],
      },
      {
        code: 237,
        description: 'Heavy and Civil Engineering Construction',
        children: [],
      },
      {
        code: 238,
        description: 'Specialty Trade Contractors',
        children: [],
      },
    ],
  },
  {
    code: 31,
    description: 'Manufacturing',
    children: [],
  },
  {
    code: 32,
    description: 'Manufacturing',
    children: [],
  },
];
