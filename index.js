/**
 * Expose UTC regex.
 *
 * Example input:
 *   2011-10-05T14:48:00.000Z
 */
module.exports = function() {
  return /(\d{4})-(\d{2})-(\d{2})T((\d{2}):(\d{2}):(\d{2}))\.(\d{3})Z/;
};
