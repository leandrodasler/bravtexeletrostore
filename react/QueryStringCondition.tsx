import React from 'react'
import { useRuntime } from 'vtex.render-runtime'


type Props =  {
  parameter: string
  value: string
  Then?: React.FC<unknown>
  Else?: React.FC<unknown>
}

const QueryStringCondition = (props: Props) => {
  const { parameter, value, Then, Else } = props
  const { query } = useRuntime()

  if (parameter && value && query?.[parameter] === value) {
    return !!Then && <Then />
  }

  return !!Else && <Else />
}

QueryStringCondition.schema = {
  title: 'Query String Condition',
  type: 'object',
  properties: {
    parameter: {
      type: 'string',
      title: 'Query string parameter',
    },
    value: {
      type: 'string',
      title: 'Value',
    },
  },
}

export default QueryStringCondition
