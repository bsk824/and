package com.example.apktest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var myWebView: WebView = findViewById(R.id.webview);
        myWebView.settings.javaScriptEnabled = true;
        myWebView.webViewClient = WebViewClient();
//        myWebView.loadUrl("file:///android_asset/www/index.html");
        myWebView.loadUrl("https://mcp.hanwhalife.com/");
        myWebView.getSettings().setTextZoom(100);
        myWebView.getSettings().setUserAgentString(myWebView.getSettings().getUserAgentString() + " app");
        WebView.setWebContentsDebuggingEnabled(true);

    }
}