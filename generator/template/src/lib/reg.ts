const regExpSelf = {
  url: ['^(http?|ftp):\\/\\/[^\\s\\/\\$.?#].[^\\s]*$', 'i'],
  // url路径验证

  email: "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
  // 邮箱验证

  path: '^(\\/([\\w]+\\/?)+|\\/|([a-zA-z]:)|[a-zA-Z]:{1}(\\\\[a-zA-Z0-9]+)+)$',
  // Linux和Windows下的文件路径验证

  phone: '^[1][3,4,5,6,7,8,9][0-9]{9}$', // 现在有196的移动号码
  // 手机验证

  ip: '^([0,1]?\\d{0,2}|2[0-4]\\d|25[0-5])\\.([0,1]?\\d{0,2}|2[0-4]\\d|25[0-5])\\.([0,1]?\\d{0,2}|2[0-4]\\d|25[0-5])\\.([0,1]?\\d{0,2}|2[0,4]\\d|25[0-5])$',
  // ip地址验证

  port: '^([0-9]|[1-9]\\d{1,3}|[1-5]\\d{4}|6[0,4]\\d{4}|6[0,4]\\d{4}|65[0-4]\\d{2}|655[0-2]\\d|6553[0-5]$)',
  // 端口号验证

  mac: '(([a-zA-Z0-9]{2}:)|([a-zA-Z0-9]{2}-)){5}[a-fA-F0-9]{2}',
  // mac地址验证

  ipv4: '^(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$',
  // ipv4地址验证

  ipv6: '^\\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*$',
  // ipv6地址验证 \\d|1\\d\\d|[1-9]? 第一个位置有个多余\ ，已去掉
};

export default regExpSelf;
