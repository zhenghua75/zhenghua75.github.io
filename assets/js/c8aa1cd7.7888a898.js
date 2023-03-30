"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},_="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),_=p(n),m=o,u=_["".concat(l,".").concat(m)]||_[m]||h[m]||s;return n?r.createElement(u,a(a({ref:t},i),{},{components:n})):r.createElement(u,a({ref:t},i))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[_]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={title:"centos7 wordpress",date:new Date("2018-02-28T21:57:47.000Z"),authors:"zhenghua",tags:["centos7","wordpress"]},a=void 0,c={permalink:"/blog/2018/02/28/centos7-wordpress",source:"@site/blog/2018-02-28-centos7-wordpress.md",title:"centos7 wordpress",description:"",date:"2018-02-28T21:57:47.000Z",formattedDate:"2018\u5e742\u670828\u65e5",tags:[{label:"centos7",permalink:"/blog/tags/centos-7"},{label:"wordpress",permalink:"/blog/tags/wordpress"}],readingTime:1.96,hasTruncateMarker:!0,authors:[{name:"\u90d1\u534e",url:"https://github.com/zhenghua75",imageURL:"https://github.com/zhenghua75.png",key:"zhenghua"}],frontMatter:{title:"centos7 wordpress",date:"2018-02-28T21:57:47.000Z",authors:"zhenghua",tags:["centos7","wordpress"]},prevItem:{title:"\u6b7b\u8bb0\u786c\u80cc",permalink:"/blog/2018/03/06/\u6b7b\u8bb0\u786c\u80cc"},nextItem:{title:"python \u5165\u95e8",permalink:"/blog/2018/02/21/python-\u5165\u95e8"}},l={authorsImageUrls:[void 0]},p=[],i={toc:p},_="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u66f4\u65b0\u73af\u5883\n[root@VM_0_14_centos ~]# yum update -y\n\u5b89\u88c5httpd\u3001php\u3001mysql\n[root@VM_0_14_centos ~]# yum install httpd -y\n[root@VM_0_14_centos ~]# yum install php php-mysql -y \n[root@VM_0_14_centos ~]# yum install mariadb-server -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[root@VM_0_14_centos ~]# systemctl start httpd\n[root@VM_0_14_centos ~]# systemctl enable httpd\n[root@VM_0_14_centos ~]# echo \"This is a httpd test page by zhenghua.\">/var/www/html/index.html\n[root@VM_0_14_centos ~]# systemctl start mariadb.service\n[root@VM_0_14_centos ~]# systemctl enable mariadb.service\n[root@VM_0_14_centos ~]# echo \" \n<html>\n<h1>This is a php test page.</h1>\n<?php\nphpinfo();\n?>\n</html>\">/var/www/html/index.php\n[root@VM_0_14_centos ~]# vi /var/www/html/connmysql.php\n<?php\n        $conn = mysql_connect('127.0.0.1','root','');\n        if ($conn)\n                echo \"succ\";\n        else\n                echo \"failure\";\n\n        mysql_close();\n?>\n\u5b89\u88c5wordpress\n[root@VM_0_14_centos ~]# cd /usr/local/src\n[root@VM_0_14_centos ~]# wget https://cn.wordpress.org/wordpress-4.9.4-zh_CN.tar.gz\n[root@VM_0_14_centos ~]# tar -xf wordpress-4.9.4-zh_CN.tar.gz\n[root@VM_0_14_centos ~]# cp -R wordpress /var/www/html/\n[root@VM_0_14_centos ~]# cd /var/www/html/wordpress\n[root@VM_0_14_centos ~]# cp wp-config-sample.php wp-config.php\n[root@VM_0_14_centos ~]# vi wp-config.php\n[root@VM_0_14_centos ~]# mysql\n\nMariaDB [(none)]> create database wpdb character set utf8;\nMariaDB [(none)]> grant all privileges on wpdb.* to 'wpadmin'@'localhost' identified by 'pass';\n\u5b89\u88c5ftp\n[root@VM_0_14_centos ~]# yum -y install vsftpd\n[root@VM_0_14_centos ~]# systemctl start vsftpd.service\n[root@VM_0_14_centos ~]# systemctl enable vsftpd.service\n[root@VM_0_14_centos ~]# vi /etc/vsftpd/vsftpd.conf\n\n#\u4fee\u6539\nanonymous_enable=NO    #\u7981\u6b62\u533f\u540d\u8bbf\u95ee\ndata_connection_timeout=5    #\u6570\u636e\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u3002\u5982\u679c\u5728\u4f7f\u7528vsftpd\u4e0a\u4f20\u4e0b\u8f7d\u788e\u5c0f\u6587\u4ef6\u7684\u65f6\u5019\u5bb9\u6613\u53d1\u751f\u8d85\u65f6\u4e2d\u65ad\u7684\u95ee\u9898\uff0c\u5c06120\u6539\u62105\u6216\u8005\u66f4\u5c0f\u4e3a\u4f73\n#\u4f7fftp\u7528\u6237\u59cb\u7ec8\u5728\u9879\u76ee\u90e8\u7f72\u7684\u6839\u76ee\u5f55\u8303\u56f4\u5185\uff0c\u7981\u6b62\u8bbf\u95ee\u7cfb\u7edf\u5176\u5b83\u6587\u4ef6\nchroot_local_user=YES    #\u6253\u5f00\u6ce8\u91ca\nchroot_list_enable=YES    #\u6253\u5f00\u6ce8\u91ca\nchroot_list_file=/etc/vsftpd/chroot_list    #\u6253\u5f00\u6ce8\u91ca\nallow_writeable_chroot=YES    #\u6dfb\u52a0\n#\u9ed8\u8ba4\u4fdd\u6301\u4e0d\u53d8\nxferlog_enable=YES    #\u542f\u7528\u4e0a\u4f20\u548c\u4e0b\u8f7d\u7684\u65e5\u5fd7\u529f\u80fd\u3002\u5b83\u53ef\u4ee5\u5bf9\u7528\u6237\u7684\u64cd\u4f5c\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\uff0c\u5f53\u51fa\u73b0\u95ee\u9898\u7684\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u65e5\u5fd7\u6392\u67e5\u95ee\u9898\n#\u8bbe\u5b9a\u652f\u6301ASCII\u6a21\u5f0f\u7684\u4e0a\u4f20\u548c\u4e0b\u8f7d\u529f\u80fd\nascii_upload_enable=YES\nascii_download_enable=YES \n[root@VM_0_14_centos ~]# vi /etc/vsftpd/chroot_list\n\n[root@VM_0_14_centos ~]# useradd -d /var/www/html -s /sbin/nologin ftpuser\n[root@VM_0_14_centos ~]# passwd ftpuser\n\n[root@VM_0_14_centos ~]# chmod -R 777 /var/www/html/\n\u5347\u7ea7\u5b8c\u6210\n[root@VM_0_14_centos ~]# chmod -R 644 /var/www/html/\n\n")))}h.isMDXComponent=!0}}]);