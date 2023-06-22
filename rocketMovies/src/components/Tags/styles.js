import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY};
color: ${({ theme }) => theme.COLORS.WHITE};
border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE}` : "none"};
`