// export const getAllContacts = ({ contacts }) => contacts;
// export const getFilter = ({ filter }) => filter;
// export const getFilteredContacts = ({contacts, filter}) => {
//     if (!filter) {
//         return contacts;
//       }
//       const normilizedFilter = filter.toLocaleLowerCase();
//       const result = contacts.filter(({ name, number }) => {
//         return (
//           name.toLowerCase().includes(normilizedFilter) ||
//           number.includes(normilizedFilter)
//         );
//       });
//       return result;
// }