/** @jsx jsx */
import { jsx } from 'theme-ui'

import { DefinitionList, DefinitionTerm, DefinitionDetail } from "../shared/definitionList"

function EntryWeather(props) {
  const { day } = props
  return (
    <DefinitionList>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        sx={{
          position: `absolute`,
          top: `18px`,
          left: `0`,
        }}>
        <g><path d="M 7 1 L 7 4.050781 C 6.414063 4.136719 5.875 4.375 5.421875 4.710938 L 3.257813 2.550781 L 2.550781 3.257813 L 4.710938 5.421875 C 4.367188 5.875 4.132813 6.410156 4.046875 7 L 1 7 L 1 8 L 4.046875 8 C 4.132813 8.589844 4.367188 9.125 4.710938 9.578125 L 2.550781 11.742188 L 3.257813 12.449219 L 5.421875 10.285156 C 5.875 10.625 6.414063 10.863281 7 10.949219 L 7 14 L 8 14 L 8 10.949219 C 8.585938 10.863281 9.125 10.625 9.578125 10.285156 L 11.742188 12.449219 L 12.449219 11.742188 L 10.285156 9.578125 C 10.632813 9.125 10.867188 8.589844 10.953125 8 L 14 8 L 14 7 L 10.953125 7 C 10.867188 6.410156 10.632813 5.875 10.285156 5.421875 L 12.449219 3.257813 L 11.742188 2.550781 L 9.578125 4.710938 C 9.125 4.375 8.585938 4.136719 8 4.050781 L 8 1 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z " fill="#51595d"/></g>
      </svg>
      <DefinitionTerm>Weather:</DefinitionTerm>
      <DefinitionDetail>
        <div>{day.frontmatter.weather.conditions} {day.frontmatter.weather.min} / {day.frontmatter.weather.max}</div>
      </DefinitionDetail>
    </DefinitionList>
  )
}

export default EntryWeather
