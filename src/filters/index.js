import requireAll from '@/util/requireAll'

const requireFilters = require.context('.', false, /^((?!index).)*.js$/)
const filters = requireAll(requireFilters)

export default filters
