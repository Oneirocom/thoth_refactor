import { Spell } from '../types'
export default {
  id: '9b970450-4a0f-43cd-8763-ce0920f9ce1e',
  name: 'inappropriate apricot',
  graph: {
    id: 'demo@0.1.0',
    nodes: {
      '124': {
        id: 124,
        data: {
          name: 'default',
          error: false,
          success: false,
          socketKey: '20c0d2db-1916-433f-88c6-69d3ae123217',
          nodeLocked: true,
          dataControls: {
            name: { expanded: true },
            playtestToggle: { expanded: true },
          },
          playtestToggle: { receivePlaytest: true },
        },
        inputs: {},
        outputs: {
          trigger: {
            connections: [{ node: 764, input: 'trigger', data: { pins: [] } }],
          },
        },
        position: [-1735.7923282597962, -114.13292905935491],
        name: 'Module Trigger In',
      },
      '233': {
        id: 233,
        data: {
          name: 'output',
          error: false,
          display: '1 2 3',
          success: false,
          socketKey: 'ba6ed95b-3aac-49e9-91ae-a33f5510c83b',
          nodeLocked: true,
          dataControls: {
            name: { expanded: true },
            sendToPlaytest: { expanded: true },
          },
          sendToPlaytest: true,
        },
        inputs: {
          input: {
            connections: [{ node: 771, output: 'output', data: { pins: [] } }],
          },
          trigger: {
            connections: [{ node: 771, output: 'trigger', data: { pins: [] } }],
          },
        },
        outputs: { trigger: { connections: [] } },
        position: [-33.11208105562871, -319.205540485338],
        name: 'Output',
      },
      '646': {
        id: 646,
        data: {
          name: 'input',
          text: 'test',
          display: 'test',
          success: false,
          socketKey: '3a9cfde5-32a0-4e96-9de7-7571a7a4e784',
          nodeLocked: true,
          dataControls: {
            name: { expanded: true },
            useDefault: { expanded: true },
            playtestToggle: { expanded: true },
          },
          defaultValue: 'no',
          playtestToggle: { receivePlaytest: true },
        },
        inputs: {},
        outputs: {
          output: {
            connections: [{ node: 764, input: 'input', data: { pins: [] } }],
          },
        },
        position: [-1756.7490443350143, -376.7788066492969],
        name: 'Universal Input',
      },
      '764': {
        id: 764,
        data: {
          code: '\n// inputs: dictionary of inputs based on socket names\n// data: internal data of the node to read or write to nodes data state\n// state: access to the current game state in the state manager window. Return state to update the state.\nfunction worker(inputs, data, state) {\n\n  // Keys of the object returned must match the names \n  // of your outputs you defined.\n  // To update the state, you must return the modified state.\n  return {output: [1,2,3]}\n}\n',
          name: 'list return',
          inputs: [
            {
              name: 'input',
              taskType: 'output',
              socketKey: 'input',
              socketType: 'anySocket',
              connectionType: 'input',
            },
          ],
          display: '{"output":[1,2,3]}',
          outputs: [
            {
              name: 'output',
              taskType: 'output',
              socketKey: 'output',
              socketType: 'anySocket',
              connectionType: 'output',
            },
          ],
          success: false,
          dataControls: {
            code: { expanded: true },
            name: { expanded: true },
            inputs: { expanded: true },
            outputs: { expanded: true },
          },
        },
        inputs: {
          input: {
            connections: [{ node: 646, output: 'output', data: { pins: [] } }],
          },
          trigger: {
            connections: [{ node: 124, output: 'trigger', data: { pins: [] } }],
          },
        },
        outputs: {
          output: {
            connections: [{ node: 770, input: 'list', data: { pins: [] } }],
          },
          trigger: {
            connections: [{ node: 771, input: 'trigger', data: { pins: [] } }],
          },
        },
        position: [-1348.7560502830124, -331.3813133122548],
        name: 'Code',
      },
      '770': {
        id: 770,
        data: { separator: ' ', success: false },
        inputs: {
          list: {
            connections: [{ node: 764, output: 'output', data: { pins: [] } }],
          },
        },
        outputs: {
          text: {
            connections: [{ node: 771, input: 'output', data: { pins: [] } }],
          },
        },
        position: [-937.1562595051406, -331.62751718913506],
        name: 'Join List',
      },
      '771': {
        id: 771,
        data: {
          code: '\n// inputs: dictionary of inputs based on socket names\n// data: internal data of the node to read or write to nodes data state\n// state: access to the current game state in the state manager window. Return state to update the state.\nfunction worker(inputs, data, state) {\n\n  // Keys of the object returned must match the names \n  // of your outputs you defined.\n  // To update the state, you must return the modified state.\n  return inputs\n}\n',
          dataControls: {
            name: { expanded: true },
            inputs: { expanded: true },
            outputs: { expanded: true },
            code: { expanded: true },
          },
          inputs: [
            {
              name: 'output',
              taskType: 'output',
              socketKey: 'output',
              connectionType: 'input',
              socketType: 'anySocket',
            },
          ],
          outputs: [
            {
              name: 'output',
              taskType: 'output',
              socketKey: 'output',
              connectionType: 'output',
              socketType: 'anySocket',
            },
          ],
          display: '{"output":"1 2 3"}',
          success: false,
        },
        inputs: {
          trigger: {
            connections: [{ node: 764, output: 'trigger', data: { pins: [] } }],
          },
          output: {
            connections: [{ node: 770, output: 'text', data: { pins: [] } }],
          },
        },
        outputs: {
          trigger: {
            connections: [{ node: 233, input: 'trigger', data: { pins: [] } }],
          },
          output: {
            connections: [{ node: 233, input: 'input', data: { pins: [] } }],
          },
        },
        position: [-449.8833497648249, -311.4641422266668],
        name: 'Code',
      },
    },
  },
  createdAt: '2022-06-01T22:46:39.699Z',
  updatedAt: '2022-06-02T01:50:25.520Z',
  deletedAt: null,
  userId: '2508068',
  modules: [],
  gameState: { list: [] },
} as unknown as Spell
