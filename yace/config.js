// 翻译插件配置文件
const CONFIG = {
    // 翻译API配置
    translation: {
        // 默认翻译服务 (MyMemory - 免费)
        defaultService: 'mymemory',
        
        // MyMemory API配置
        mymemory: {
            baseUrl: 'https://api.mymemory.translated.net/get',
            timeout: 10000, // 10秒超时
        },
        
        // Google Translate API配置 (需要API密钥)
        google: {
            baseUrl: 'https://translation.googleapis.com/language/translate/v2',
            apiKey: '', // 在此处填入您的Google Translate API密钥
            timeout: 15000,
        },
        
        // Microsoft Translator API配置 (需要API密钥)
        microsoft: {
            baseUrl: 'https://api.cognitive.microsofttranslator.com/translate',
            apiKey: '', // 在此处填入您的Microsoft Translator API密钥
            region: '', // 在此处填入您的Azure区域
            timeout: 15000,
        },
        
        // 百度翻译API配置 (需要API密钥)
        baidu: {
            baseUrl: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
            appId: '', // 在此处填入您的百度翻译App ID
            appKey: '', // 在此处填入您的百度翻译App Key
            timeout: 10000,
        }
    },
    
    // 用户界面配置
    ui: {
        // 弹窗样式
        dialog: {
            width: '400px',
            maxHeight: '600px',
            theme: 'light', // 'light' 或 'dark'
            language: 'zh-CN', // 界面语言
        },
        
        // 支持的语言列表
        supportedLanguages: [
            { code: 'en', name: '英语', nativeName: 'English' },
            { code: 'zh', name: '中文', nativeName: '中文' },
            { code: 'ja', name: '日语', nativeName: '日本語' },
            { code: 'ko', name: '韩语', nativeName: '한국어' },
            { code: 'fr', name: '法语', nativeName: 'Français' },
            { code: 'de', name: '德语', nativeName: 'Deutsch' },
            { code: 'es', name: '西班牙语', nativeName: 'Español' },
            { code: 'ru', name: '俄语', nativeName: 'Русский' },
            { code: 'it', name: '意大利语', nativeName: 'Italiano' },
            { code: 'pt', name: '葡萄牙语', nativeName: 'Português' },
            { code: 'ar', name: '阿拉伯语', nativeName: 'العربية' },
            { code: 'hi', name: '印地语', nativeName: 'हिन्दी' },
        ],
        
        // 默认目标语言
        defaultTargetLanguage: 'en',
        
        // 是否自动检测源语言
        autoDetectSourceLanguage: true,
    },
    
    // 功能配置
    features: {
        // 是否启用历史记录
        enableHistory: true,
        
        // 是否启用收藏夹
        enableFavorites: false,
        
        // 是否启用批量翻译
        enableBatchTranslation: false,
        
        // 是否启用语音朗读
        enableTextToSpeech: false,
        
        // 是否启用拼写检查
        enableSpellCheck: false,
    },
    
    // 性能配置
    performance: {
        // 缓存大小限制
        maxCacheSize: 100,
        
        // 请求重试次数
        maxRetries: 3,
        
        // 请求间隔 (毫秒)
        requestInterval: 1000,
        
        // 是否启用离线模式
        enableOfflineMode: false,
    },
    
    // 安全配置
    security: {
        // 是否启用内容安全策略
        enableCSP: true,
        
        // 允许的域名列表
        allowedDomains: [
            'localhost:3000',
            'api.mymemory.translated.net',
            'translation.googleapis.com',
            'api.cognitive.microsofttranslator.com',
            'fanyi-api.baidu.com'
        ],
        
        // 是否记录用户行为
        enableLogging: false,
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
