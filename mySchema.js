import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    minValue: {
      type: 'number',
    },
    maxValue: {
      type: 'number',
    },
  },
};

const formData = {
    minValue: 0,
    maxValue: 10,
};

render(<Form schema={schema} formData={formData} validator={validator} />, document.getElementById('app'));