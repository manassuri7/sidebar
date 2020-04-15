import Voucher from '../Voucher';
import Cards from '../Cards';
import Fastag from '../Fastag';
import App from "../App";

//  const Routes = [
//   {
//     		path : "/",
//     		exact : false,
//     		component : App,
//     		routes : [
//     {
//       name: 'services',
//       label: 'Services',
//       routes: [
//         { name: 'voucher', label: 'Voucher', exact: true, path:'/voucher', component : Voucher },
//         { name: 'cards', label: 'Cards',path:'/cards',exact: true,component : Cards },
//         { name: 'fastag', label: 'FASTag',path:'/fastag',exact: true,component : Fastag  },
//         { name: 'fastag-for-unregistered-trucks', label: 'FASTag for Unregistered Trucks' ,exact: true,path:'/fastag-for-unregistered-truck',component : Voucher},
//         { name: 'fastag-replacement', label: 'FASTag Replacement',exact: true,path:'/fastag-replacement',component : Voucher },
//         { name: 'gps', label: 'GPS',path:'/gps' ,exact: true,component : Voucher},
//         { name: 'gps-support', label: 'GPS Support' ,path:'gps-support',exact: true,component : Voucher},
//         { name: 'l1-support', label: 'L1 Support' ,path:'/l1-support',exact: true,component : Voucher},
//         { name: 'internal-fuel', label: 'Internal Fuel',path:'/internal-fuel' ,exact: true,component : Voucher},
//         { name: 'credit-product', label: 'Credit Product' ,path:'/credit-product',exact: true,component : Voucher},
//         { name: 'tyres', label: 'Tyres' ,path:'/tyres',exact: true,component : Voucher},
//         { name: 'lubricants', label: 'Lubricants' ,path:'/lubricants',exact: true,component : Voucher},
//         { name: 'add-hpcl-cardless', label: 'Add HPCL Cardless' ,exact: true,path:'/add-hpcl-cardless',component : Voucher},
  
//       ],
//     },
//     {
//       name: 'users',
//       label: 'Users',
//       routes: [
//         { name: 'merchant', label: 'Merchant',path:'/merchant' ,exact: true,component : Voucher},
//         { name: 'fleet-owner', label: 'Fleet Owner' ,path:'/fleet-owner',exact: true,component : Voucher},
//         { name: 'address-verification', label: 'Address Verification' ,exact: true,path:'/address-verification',component : Voucher},
//         { name: 'rc', label: 'RC' ,path:'/rc',exact: true,component : Voucher},
//         { name: 'fo-kyc', label: 'FO KYC' ,path:'/fo-kyc',exact: true,component : Voucher},
//         { name: 'kyc', label: 'KYC' ,path:'/kyc',exact: true,component : Voucher},
//         { name: 'kyc-mapping', label: 'KYC Mapping' ,path:'/kyc-mapping',exact: true,component : Voucher},
//         { name: 'customer-id', label: 'Customer Id',path:'/customer-id',exact: true,component : Voucher },
//       ],
//     },
//     {
//       name: 'accounts',
//       label: 'Accounts',
//       routes: [
//         { name: 'view-balance', label: 'View Balance',path:'/view-balance',exact: true,component : Voucher },
//         { name: 'transaction-history', label: 'Transaction History' ,path:'/transaction-history',exact: true,component : Voucher},
        
//       ],
//     },
//     {
//       name: 'payment',
//       label: 'Payment',
//       routes: [
//         { name: 'recharge', label: 'Recharge',path:'/recharge' ,exact: true,component : Voucher},
//         { name: 'payment-chargeback', label: 'Payment ChargeBack',path:'/payment-chargeback' ,exact: true,component : Voucher},
//         { name: 'adhoc-payments', label: 'Adhoc Payments',path:'/adhoc-payments' ,exact: true,component : Voucher},
//         { name: 'wrong-va-transfer', label: 'Wrong VA Transfer',exact: true,path:'/wrong-va-transfer' },
//         { name: 'wrong-va-transfer-history', label: 'Wrong VA Transfer History',path:'/wrong-va-transfer-history' ,exact: true,component : Voucher},
//         { name: 'cash-inflow', label: 'Cash Inflow',path:'/cash-inflow',exact: true,component : Voucher },
//         { name: 'chargeback-new', label: 'ChargeBack New',path:'/chargeback-new',exact: true,component : Voucher },
//         { name: 'chargeback-debit-adjustment-transactions', label: 'Chargeback Debit Adjustment Transactions',exact: true,path:'/chargeback-debit-adjustment-transactions' ,component : Voucher},
//         { name: 'transaction-enquiry', label: 'Transaction Enquiry',path:'/transaction-enquiry' ,exact: true,component : Voucher},
//       ],
//     },
//     {
//       name: 'request-services',
//       label: 'Request Services',
//       path:'/request-services',exact: true,
//       component : Voucher
//     },
//     {
//       name: 'remove-truck',
//       label: 'Remove Truck',
      
//       routes: [
//         { name: 'removal-status', label: 'Removal Status' ,path:'/removal-status',exact: true,component : Voucher},
//         { name: 'gps-status', label: 'GPS Status' ,path:'/gps-status',exact: true,component : Voucher},
//       ],
//     },
//     {
//       name: 'truck-claim',
//       label: 'Truck Claim',
//       path:'/truck-claim',exact: true,
//       component : Voucher
//     },
//     {
//       name: 'reconciliation',
//       label: 'Reconciliation',
//       routes: [
//         { name: 'hourly', label: 'Hourly' ,path:'/hourly',exact: true,component : Voucher},
//         { name: 'daily', label: 'Daily' ,path:'/daily',exact: true,component : Voucher},
//         { name: 'upload-transactions', label: 'Upload Transactions' ,exact: true,path:'/upload-transactions',component : Voucher},
//         { name: 'hold-transactions', label: 'Hold Transactions' ,exact: true,path:'/hold-transactions',component : Voucher},
//         { name: 'merchant', label: 'Merchant' ,path:'/merchant',exact: true,component : Voucher},
//         { name: 'reward', label: 'Reward' ,path:'/reward',exact: true,component : Voucher},
//         { name: 'fleet-owner', label: 'Fleet Owner' ,exact: true,path:'/fleet-owner',component : Voucher},
//         ],
//     },
//     {
//       name: 'recovery',
//       label: 'Recovery',path:'/recovery',exact: true,component : Voucher
//     },
//     {
//       name: 'limit',
//       label: 'Limit',path:'/limit',exact: true,component : Voucher
//     },
//     {
//       name: 'cms',
//       label: 'CMS',
//       routes: [
//         { name: 'fo-referer-data', label: 'FO/Referer Data',path:'/fo-referer-data' ,exact: true,component : Voucher},
//         { name: 'subscription', label: 'Subscription' ,path:'/subscription',exact: true,component : Voucher},
//         { name: 'merchant-mapping', label: 'Merchant Mapping' ,path:'/merchant-mapping',exact: true,component : Voucher},
//         { name: 'hold-transactions', label: 'Hold Transactions',path:'/hold-transactions' ,exact: true,component : Voucher},
//         { name: 'utils', label: 'Utils' ,path:'/utils',exact: true,component : Voucher},
//         ],
//     },
//     {
//       name: 'cp-onboarding',
//       label: 'CP Onboarding',
//       routes: [
//         { name: 'cp-leads', label: 'CP Leads' ,path:'/cp-leads',exact: true,component : Voucher},
//         ],
//     },
//     {
//       name: 'retool',
//       label: 'Retool',path:'/retool',exact: true,component : Voucher
//     },
//     {
//       name: 'mis-add-user',
//       label: 'MIS Add User',path:'/mis-add-user',exact: true,component : Voucher
//     },
//     {
//       name: 'others',
//       label: 'Others',
//       routes: [
//         { name: 'issues', label: 'Issues',path:'/issues' ,exact: true,component : Voucher},
//         ],
//     },
//     {
//       name: 'logout',
//       label: 'Logout',path:'/logout',exact: true,component : Voucher
//     },
//  ]
//   }

// ]

export const Routes = [
  	{
		path : "/",
		exact : false,
		component : App,
		routes : [
			{
                path:'/voucher',
                exact: true,
                component: Voucher
            },
            {
              path:'/cards',
              exact: true,
              component: Cards
          },
          {
            path:'/fastag',
            exact: true,
            component: Fastag
        },
          
		]
	}
]




