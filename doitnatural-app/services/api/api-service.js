import HttpService from '../../http-service'

// QUERIES
import getTableForQrSlugQuery from '../queries/get-table-for-qr-slug-query'

export default class ApiService {
  constructor ({ apiUrl }) {
    const headers = {}
    this.httpService = new HttpService({ apiUrl, headers })
  }

  getAvailableBalanceForPaymentMethod ({ paymentMethodId }) {
    return getAvailableBalanceForPaymentMethodQuery(this.httpService, { paymentMethodId })
  }

  getLoggedCustomer () {
    return getLoggedCustomerQuery(this.httpService)
  }

  getTableForQrSlug ({ qrSlug }) {
    return getTableForQrSlugQuery(this.httpService, { qrSlug })
  }

  getBillForQrSlug ({ qrSlug }) {
    return getBillForQrSlugQuery(this.httpService, { qrSlug })
  }

  createPaymentMethod ({ type, subType, data, frontRedirectUrl }) {
    return createPaymentMethodMutation(this.httpService, { type, subType, data, frontRedirectUrl })
  }

  updatePaymentMethodFromOauthToken ({ paymentMethodId, paymentMethodSubType, authenticationCode }) {
    return updatePaymentMethodFromOauthTokenMutation(this.httpService, { paymentMethodId, paymentMethodSubType, authenticationCode })
  }

  removePaymentMethod ({ paymentMethodId }) {
    return removePaymentMethodMutation(this.httpService, { paymentMethodId })
  }

  createPayment ({
    billId,
    selectedPaymentMethodsIds,
    amountToPay,
    tipAmount,
    customerFirstname,
    partialPayment,
  }) {
    return createPaymentMutation(this.httpService, {
      billId,
      selectedPaymentMethodsIds,
      amountToPay,
      tipAmount,
      customerFirstname,
      partialPayment,
    })
  }

  loginGuestCustomer () {
    return loginGuestCustomerQuery(this.httpService)
  }

  sendPaymentTransactionResult ({ transactionExternalId, type }) {
    return sendPaymentTransactionResultMutation(this.httpService, { transactionExternalId, type })
  }

  sendPaymentInvoiceByEmail ({ email, paymentId }) {
    return sendPaymentInvoiceByEmailMutation(this.httpService, { email, paymentId })
  }
}
