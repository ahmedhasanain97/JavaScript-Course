let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//start with https
// s in http is optional with "?"
//then //
//(?:[-\w]+\.) this group is optional can be found or not
// [-\w]+ = this range will get anything in the group the order is not important.
// the + means it can repeat unlimited times.
// \. = this will get any Character [a-zA-Z0-9_]
// ([-\w]+) = this is group
// * zero or more.
// i = case-insensitive.