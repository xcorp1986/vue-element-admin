export default {
  route: {
    system: 'System',
    account_list: 'Account List',
    my_account: 'My Account',
    account_resource: 'Resource',
    role: 'Role',
    customer_account_child: 'Market Person',
    account_resource_group: 'Resource Group',
    common: 'Common',
    common_website: 'Website',
    common_channel: 'Channel',
    common_marketgroup: 'Market Group',
    advertise_generate: 'Generate Ads',
    advertise_mutilgenerate: 'Mutil-Gate Ads',
    advertise_generatemlink: 'Mutil-Links Ads',
    advertise_list: 'Ads List',
    advertise: 'Advertise',
    base_statistics: 'Base Statistics',
    basestics_initdata: 'Initial Data',
    basestics_allsite: 'All Site',
    basestics_site: 'Every Site',
    basestics_refer: 'Refer Domain',
    basestics_sku: 'Sku',
    basestics_skurefer: 'Sku Refer',
    basestics_search: 'Search',
    basestics_searchlang: 'Search lang',
    basestics_firsturl: 'First Url',
    basestics_url: 'Url',
    basestics_category: 'Category',
    basestics_device: 'Devide',
    basestics_country: 'Country',
    basestics_browser: 'Browser',

    user_statistics: 'User Statistics',
    userstics_userdata: 'User Data',

    advertics_all_statics: 'Ads All Statics',
    adsallstics_site: 'Site',
    adsallstics_refer: 'Refer',
    adsallstics_sku: 'Sku',
    adsallstics_skurefer: 'Sku Refer',
    adsallstics_search: 'Search',
    adsallstics_searchlang: 'Search Lang',
    adsallstics_firsturl: 'First Url',
    adsallstics_url: 'Url',
    adsallstics_category: 'Category',
    adsallstics_devide: 'Devide',
    adsallstics_country: 'Country',
    adsallstics_browser: 'Browser',

    advertics_detail_statics: 'Ads Detail Statics',
    adsdetailstics_ads: 'Advertics',
    adsdetailstics_person: 'Ads Person',
    adsdetailstics_group: 'Ads Group',
    adsdetailstics_imager: 'Ads Imager',
    adsdetailstics_campaign: 'Campaign',
    adsdetailstics_childchannel: 'Child Channel',
    adsdetailstics_channel: 'Channel',
    adsdetailstics_edm: 'EDM',

    dashboard: 'Dashboard',
    introduction: 'Introduction',
    documentation: 'Documentation',
    permission: 'Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createForm: 'Create Form',
    editForm: 'Edit Form',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'screenfull',
    theme: 'theme'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    site_name: 'Site Name',
    payment: 'Pay',

    browser_name: 'Browser Name',
    pv: 'Pv',
    uv: 'Uv',
    rate_pv: 'pv/uv',
    stay_seconds: 'Stay Second（s）',
    jump_out_count: 'Jump Out Count',
    drop_out_count: 'Drop Out Count',
    cart_count: 'Cart Sku Count',
    order_count: 'Order Sku Count',
    success_order_count: 'Payment Order Sku Count',
    is_return: 'Return User Count',
    service_date_str: 'Date',
    stay_seconds_rate: 'Average stay Sec(s)',
    editinfo: 'Detial',
    is_return_rate: 'Return Rate',
    jump_out_rate: 'Jump Rate',
    drop_out_rate: 'Drop Rate',
    success_order_no_count: 'SuccOrder #No Count',
    sku_sale_rate: 'Sale Rate',
    service_date_str_begin: 'Date Begin',
    service_date_str_end: 'Date End',
    uv_begin: 'UV Begin',
    uv_end: 'UV End',
    pv_rate: 'pv/uv',
    first_page: 'First Page Count',
    website_id: 'Website',
    view_info: 'Detail',
    couontry_code: 'Country',
    operate: 'Operate System',
    devide: 'Devide',
    base_info: 'Base Info',
    trend: 'Trend',
    trend_info: 'Trend Info',
    all_trend: 'All Trend',

    site_js_info: 'Js Code',
    payment_end_time: 'Pay End Day',
    website_count: 'Max Site Count',
    website_day_max_count: 'Site Day Count',
    edit_payment_info: 'Edit Pay Info',
    trace_js_url: 'Trace Js Url',
    trace_api_url: 'Trace Api Url',
    access_token: 'Access Token',
    site_uid: 'Site Uid',
    common_js: 'Common Js',
    category_js: 'Category Js',
    product_js: 'Product Js',
    cart_js: 'Cart Js',
    order_js: 'Order Js',
    success_order_js: 'SuccessOrder Js',
    login_js: 'Login Js',
    register_js: 'Register Js',
    search_js: 'Search Js',
    currency_js: 'Currency Js',
    example_cart_js: 'Var $cart Exam',
    example_order_js: 'var $order Exam',
    example_success_order_js: 'var $order Exam',
    example_search_js: 'var $search Exam',

    domain: 'Domain',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    market_group_name: 'mGroup Name',
    job_type_name: 'Job Type',
    channel_name: 'Channel',
    channel_child_name: 'Channel Child',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    username: 'UserName',
    password: 'Password',
    email: 'Email',
    created_at: 'Created',
    updated_at: 'Updated',
    birth_date: 'Birth Date',
    batch_delete: 'Batch Delete',
    created_begin: 'Created Begin',
    created_end: 'Created End',
    age: 'Age',
    telephone: 'Telephone',
    name: 'name',
    new_password: 'New Password',
    confirm_password: 'Confirm Password',
    resource_group_name: 'Group Name',
    resource_name: 'Resource Name',
    url_key: 'Url Key',
    request_method: 'Req Method',
    created_customer: 'Created User',
    role_name: 'Role Name',
    own_name: 'Own Name',
    update_role_resource: 'Resource',
    account_type: 'Account Type',
    account_parent_id: 'Common Admin',
    update_customer_role: 'Role',
    sex: 'sex'
    // id_asc: 'ID Ascending',
    // id_desc: 'ID Descending',
    // created_at_asc: 'CreatedAt Ascending',
    // created_at_desc: 'CreatedAt Descending'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export selected items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Theme change',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  }
}
