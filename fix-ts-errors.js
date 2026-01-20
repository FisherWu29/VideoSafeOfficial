import fs from 'fs';
import path from 'path';

// 要修复的组件目录
const componentsDir = path.join(process.cwd(), 'src', 'components');

// 获取所有.vue文件
const vueFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.vue'));

// 修复每个文件
vueFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 修复viewport属性中的margin值
  content = content.replace(/margin: '-100px'/g, 'margin: -100');
  
  // 写入修复后的内容
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
});

console.log('All files fixed!');
