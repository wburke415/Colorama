export const createMailingList = email => (
  $.ajax({
    method: 'POST',
    url: 'api/mailing_list',
    data: { email }
  })
);